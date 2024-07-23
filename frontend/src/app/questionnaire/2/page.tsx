"use client";

import React, { useState } from "react";
import Introduction from "../../components/Introduction";
import IntroductionBehavior from "../../components/IntroductionBehavior";
import Video from "../../components/Video";
import BehaviorQuestionnaire from "../../components/BehaviorQuestionnaire";

const AdRelevant_AdPrompt = () => {
  const adType = "AdRelevant";
  const interactionMode = "AdPrompt";
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{
    [key: string]: string | Record<string, string>;
  }>({
    condition: "2",
  });

  const handleNextPage = (
    formDataKey?: string,
    formDataValue?: string | Record<string, string>,
  ) => {
    if (formDataKey != null && formDataValue != null) {
      setFormData((prevData) => ({
        ...prevData,
        formDataKey: formDataValue,
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
            formDataKey="behavior_1"
          />
        );
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

export default AdRelevant_AdPrompt;
