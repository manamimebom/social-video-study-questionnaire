"use client";

import React, { useState } from "react";
import Introduction from "../../components/Introduction";
import IntroductionBehavior from "../../components/IntroductionBehavior";
import Video, { interactionModes, videoTypes } from "../../components/Video";
import BehaviorQuestionnaire from "../../components/BehaviorQuestionnaire";
import BackgroundQuestionnaire from "@/app/components/BackgroundQuestionnaire";
import Closing from "@/app/components/Closing";
import IntroductionBackground from "@/app/components/IntroductionBackground";

const AdIrrelevant_SkippableAfter5Sec = () => {
  const adType = videoTypes.AdIrrelevant;
  const interactionMode = interactionModes.SkippableAfter5Sec;
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{
    [key: string]: string | Record<string, string>;
  }>({
    condition: "7",
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

    setStep(step + 1);
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
          <BehaviorQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_1"
          />
        );
      case 4:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={1}
            interactionMode={interactionMode}
          />
        );
      case 5:
        return (
          <BehaviorQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_2"
          />
        );
      case 6:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={2}
            interactionMode={interactionMode}
          />
        );
      case 7:
        return (
          <BehaviorQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_3"
          />
        );
      case 8:
        return (
          <Video
            onSubmit={handleNextPage}
            videoType={adType}
            videoIdx={3}
            interactionMode={interactionMode}
          />
        );
      case 9:
        return (
          <BehaviorQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_a_4"
            lastBehaviorQuestionnaire={true}
          />
        );
      case 10:
        return <IntroductionBackground onSubmit={handleNextPage} />;
      case 11:
        return (
          <BackgroundQuestionnaire
            onSubmit={handleNextPage}
            formDataKey="answer_part_b"
          />
        );
      case 12:
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

export default AdIrrelevant_SkippableAfter5Sec;
