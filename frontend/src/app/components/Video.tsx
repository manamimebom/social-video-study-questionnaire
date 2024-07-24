import { useRef, useState } from "react";
import Button from "./Button";
import ReactPlayer from "react-player/youtube";

export enum videoTypes {
  AdRelevant = "AdRelevant",
  AdIrrelevant = "AdIrrelevant",
  PureAd = "PureAd",
}

export enum interactionModes {
  NoInteraction = "NoInteraction",
  AdPrompt = "AdPrompt",
  SkippableAfter5Sec = "SkippableAfter5Sec",
  ChooseToWatch = "ChooseToWatch", // for ads watching after ChooseToWatch mode
}

interface IntroductionBehaviorProps {
  onSubmit: (key?: string, value?: string) => void;
  videoType: string;
  videoIdx: number;
  interactionMode: interactionModes;
}

const Video: React.FC<IntroductionBehaviorProps> = ({
  onSubmit,
  videoType,
  videoIdx,
  interactionMode,
}) => {
  const videos: { [key: string]: string[] } = {
    [videoTypes.AdRelevant]: [
      "TKzWOvVJLwM",
      "niosz8dLVWw",
      "7-7NaKHt9B0",
      "BqZZRVubMfY",
    ],
    [videoTypes.AdIrrelevant]: [
      "qd9ozTOmr_o",
      "rpDvv0LKdnM",
      "W4NsnJEREGs",
      "1TpQS3Aq2wc",
    ],
    [videoTypes.PureAd]: [
      "gpbXte0SbHc",
      "ws_QEn2VPbI",
      "W4NsnJEREGs",
      "TUMxi8S1-I0",
    ],
  };

  const videoAdSec: { [key: string]: number[] } = {
    // AdRelevant
    TKzWOvVJLwM: [98, 129],
    niosz8dLVWw: [105, 137],
    "7-7NaKHt9B0": [92, 127],
    BqZZRVubMfY: [95, 129],

    // AdIrrelevant
    qd9ozTOmr_o: [98, 133],
    rpDvv0LKdnM: [105, 139],
    W4NsnJEREGs: [92, 123],
    "1TpQS3Aq2wc": [95, 126],
  };

  const videoID = videos[videoType][videoIdx];
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isSkipAdModalOpen, setIsSkipAdModalOpen] = useState<boolean>(false);

  const [isSkipAdsInBehavior, setIsSkipAdsInBehavior] =
    useState<boolean>(false);
  const [isWatchAdsInDecision, setIsWatchAdsInDecision] =
    useState<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleVideoEnd = () => {
    if (interactionMode == interactionModes.SkippableAfter5Sec) {
      onSubmit(
        `behavioral_control_${videoIdx + 1}`,
        isSkipAdsInBehavior.toString(),
      );
    } else if (interactionMode == interactionModes.ChooseToWatch) {
      onSubmit(
        `decisional_control_${videoIdx + 1}`,
        isWatchAdsInDecision.toString(),
      );
    } else {
      onSubmit(undefined, undefined);
    }
  };

  const handleProgress = (progress: any) => {
    setPlayedSeconds(progress.playedSeconds);
    if (
      interactionMode == interactionModes.ChooseToWatch &&
      playedSeconds >= videoAdSec[videoID][0] - 2 &&
      playedSeconds < videoAdSec[videoID][0] - 1
    ) {
      setIsPlaying(false);
      setIsSkipAdModalOpen(true);
    }
  };

  const handleSkipAd = () => {
    setPlayedSeconds(videoAdSec[videoID][1]);
    if (playerRef.current) {
      playerRef.current.seekTo(videoAdSec[videoID][1]);
    }
    setIsSkipAdModalOpen(false);
    setIsPlaying(true);
    if (interactionMode == interactionModes.SkippableAfter5Sec) {
      setIsSkipAdsInBehavior(true);
    }
  };

  const handleWatchAd = () => {
    setIsSkipAdModalOpen(false);
    setIsPlaying(true);
    if (interactionMode == interactionModes.ChooseToWatch) {
      setIsWatchAdsInDecision(true);
    }
  };

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        className="absolute left-0 top-0 -z-10"
        url={`https://www.youtube.com/embed/${videoID}?si=W-Ls-F0BEsr01dcH&t=0s`}
        playing={isPlaying}
        controls={true}
        onEnded={handleVideoEnd}
        onProgress={handleProgress}
        playbackRate={1} // speed of video
        width="100vw"
        height="100vh"
      />
      {interactionMode == interactionModes.AdPrompt &&
        playedSeconds >= videoAdSec[videoID][0] - 5 &&
        playedSeconds < videoAdSec[videoID][0] && (
          <div className="absolute bottom-6 right-6">
            <Button
              context="即將播放廣告"
              width="w-48"
              fontSize="text-2xl"
              noAction
            ></Button>
          </div>
        )}
      {interactionMode == interactionModes.SkippableAfter5Sec &&
        playedSeconds >= videoAdSec[videoID][0] + 5 &&
        playedSeconds < videoAdSec[videoID][1] && (
          <div className="absolute bottom-6 right-6">
            <Button
              context="點此按鈕可略過廣告"
              width="w-64"
              fontSize="text-2xl"
              noAction
              onClick={handleSkipAd}
            ></Button>
          </div>
        )}
      {interactionMode == interactionModes.ChooseToWatch &&
        isSkipAdModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="w-11/12 rounded-lg bg-white p-6 shadow-lg md:w-1/3">
              <p className="mb-24 mt-24 text-center text-xl font-medium">
                廣告即將播放，請問您是否要觀看廣告？
              </p>
              <div className="mb-4 flex justify-evenly">
                <Button
                  context="是"
                  width="w-16"
                  fontSize="text-lg"
                  onClick={handleWatchAd}
                ></Button>
                <Button
                  context="否"
                  width="w-16"
                  fontSize="text-lg"
                  onClick={handleSkipAd}
                ></Button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Video;
