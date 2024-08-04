"use client";

import React, { useState } from "react";
import Introduction from "../../components/Introduction";
import IntroductionBehavior from "../../components/IntroductionBehavior";
import Video, { interactionModes, videoTypes } from "../../components/Video";
import BehaviorQuestionnaire from "../../components/BehaviorQuestionnaire";
import StillWatchAdsExplanation from "../../components/StillWatchAdsExplanation";
import IntroductionBackground from "../../components/IntroductionBackground";
import BackgroundQuestionnaire from "../../components/BackgroundQuestionnaire";
import Closing from "../..//components/Closing";

const AdRelevant_ChooseToWatch = () => {
  const adType = videoTypes.AdRelevant;
  const interactionMode = interactionModes.ChooseToWatch;
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{
    [key: string]: string | Record<string, string>;
  }>({
    condition: "4",
  });

  const handleNextPage = (
    formDataKey?: string,
    formDataValue?: string | Record<string, string>,
  ) => {
    if (formDataKey != null && formDataValue != null) {
      setFormData((prevData) => ({
        ...prevData,
        [formDataKey]: formDataValue,
      }));
    }

    if (
      formDataKey &&
      formDataKey.match(/^decisional_control_[1-4]$/) &&
      formDataValue === false.toString() // did not watch Ads, skip next step
    ) {
      setStep(step + 2);
    } else if (
      formDataKey &&
      formDataKey.match(/^answer_part_a_[1-4]$/) &&
      [3, 9, 15, 21].includes(step) // finish Ads and Video behavior questionnaire
    ) {
      setStep(step + 5);
    } else {
      setStep(step + 1);
    }
  };

  const showStep = () => {
    switch (step) {
      case 0:
        return <Introduction onSubmit={handleNextPage} formDataKey="name" />;
      case 1:
        return <IntroductionBehavior onSubmit={handleNextPage} />;
      case 2:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={0}
            interactionMode={interactionMode}
          />
        );
      case 3:
        return (
          <BehaviorQuestionnaire // Ads and Video
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_1"
          />
        );
      case 4:
        return (
          <BehaviorQuestionnaire // Video only
            onSubmit={handleNextPage}
            showAdsQuestions={false}
            showVideoQuestions={true}
            formDataKey="answer_part_a_1"
          />
        );
      case 5:
        return <StillWatchAdsExplanation onSubmit={handleNextPage} />;
      case 6:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={videoTypes.PureAd}
            videoIdx={0}
            interactionMode={interactionModes.NoInteraction}
          />
        );
      case 7:
        return (
          <BehaviorQuestionnaire // Ads only
            onSubmit={handleNextPage}
            showAdsQuestions={true}
            showVideoQuestions={false}
            oldAnswers={formData["answer_part_a_1"] as Record<string, string>}
            formDataKey="answer_part_a_1"
          />
        );
      case 8:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={1}
            interactionMode={interactionMode}
          />
        );
      case 9:
        return (
          <BehaviorQuestionnaire // Ads and Video
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_2"
          />
        );
      case 10:
        return (
          <BehaviorQuestionnaire // Video only
            onSubmit={handleNextPage}
            showAdsQuestions={false}
            showVideoQuestions={true}
            formDataKey="answer_part_a_2"
          />
        );
      case 11:
        return <StillWatchAdsExplanation onSubmit={handleNextPage} />;
      case 12:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={videoTypes.PureAd}
            videoIdx={1}
            interactionMode={interactionModes.NoInteraction}
          />
        );
      case 13:
        return (
          <BehaviorQuestionnaire // Ads only
            onSubmit={handleNextPage}
            showAdsQuestions={true}
            showVideoQuestions={false}
            oldAnswers={formData["answer_part_a_2"] as Record<string, string>}
            formDataKey="answer_part_a_2"
          />
        );
      case 14:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={2}
            interactionMode={interactionMode}
          />
        );
      case 15:
        return (
          <BehaviorQuestionnaire // Ads and Video
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_3"
          />
        );
      case 16:
        return (
          <BehaviorQuestionnaire // Video only
            onSubmit={handleNextPage}
            showAdsQuestions={false}
            showVideoQuestions={true}
            formDataKey="answer_part_a_3"
          />
        );
      case 17:
        return <StillWatchAdsExplanation onSubmit={handleNextPage} />;
      case 18:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={videoTypes.PureAd}
            videoIdx={2}
            interactionMode={interactionModes.NoInteraction}
          />
        );
      case 19:
        return (
          <BehaviorQuestionnaire // Ads only
            onSubmit={handleNextPage}
            showAdsQuestions={true}
            showVideoQuestions={false}
            oldAnswers={formData["answer_part_a_3"] as Record<string, string>}
            formDataKey="answer_part_a_3"
          />
        );
      case 20:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={3}
            interactionMode={interactionMode}
          />
        );
      case 21:
        return (
          <BehaviorQuestionnaire // Ads and Video
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_4"
            lastBehaviorQuestionnaire={true}
          />
        );
      case 22:
        return (
          <BehaviorQuestionnaire // Video only
            onSubmit={handleNextPage}
            showAdsQuestions={false}
            showVideoQuestions={true}
            formDataKey="answer_part_a_4"
            lastBehaviorQuestionnaire={true}
          />
        );
      case 23:
        return <StillWatchAdsExplanation onSubmit={handleNextPage} />;
      case 24:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={videoTypes.PureAd}
            videoIdx={3}
            interactionMode={interactionModes.NoInteraction}
          />
        );
      case 25:
        return (
          <BehaviorQuestionnaire // Ads only
            onSubmit={handleNextPage}
            showAdsQuestions={true}
            showVideoQuestions={false}
            oldAnswers={formData["answer_part_a_4"] as Record<string, string>}
            formDataKey="answer_part_a_4"
            lastBehaviorQuestionnaire={true}
          />
        );
      case 26:
        return <IntroductionBackground onSubmit={handleNextPage} />;
      case 27:
        return (
          <BackgroundQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_b"
          />
        );
      case 28:
        return <Closing formData={formData} />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-screen-lg p-8">{showStep()}</div>
    </div>
  );
};

export default AdRelevant_ChooseToWatch;
