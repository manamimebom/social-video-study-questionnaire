import { useState } from "react";
import Button from "./Button";
import ReactPlayer from "react-player/youtube";

interface IntroductionBehaviorProps {
  onSubmit: (key?: string, value?: string) => void;
  videoType: string;
  videoIdx: number;
  keyName?: string;
}

const Video: React.FC<IntroductionBehaviorProps> = ({
  onSubmit,
  keyName,
  videoType,
  videoIdx,
}) => {
  const videos: { [key: string]: string[] } = {
    relevantAdVideos: [
      "https://www.youtube.com/embed/TKzWOvVJLwM?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/niosz8dLVWw?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/7-7NaKHt9B0?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/BqZZRVubMfY?si=W-Ls-F0BEsr01dcH",
    ],
    irrelevantAdVideos: [
      "https://www.youtube.com/embed/qd9ozTOmr_o?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/rpDvv0LKdnM?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/W4NsnJEREGs?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/1TpQS3Aq2wc?si=W-Ls-F0BEsr01dcH",
    ],
    ads: [
      "https://www.youtube.com/embed/gpbXte0SbHc?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/ws_QEn2VPbI?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/W4NsnJEREGs?si=W-Ls-F0BEsr01dcH",
      "https://www.youtube.com/embed/TUMxi8S1-I0?si=W-Ls-F0BEsr01dcH",
    ],
  };

  const videoSrcURL =
    videos[videoType][videoIdx] + "&amp;autoplay=1&amp;controls=0";

  const onVideoEnd = () => {
    onSubmit(undefined, undefined);
  };

  return (
    <>
      <ReactPlayer
        className="absolute left-0 top-0"
        url={videos[videoType][videoIdx]}
        playing={true}
        controls={false}
        onEnded={onVideoEnd}
        width="100vw"
        height="100vh"
      />
    </>
  );
};

export default Video;
