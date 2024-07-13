"use client";

import React, { useState } from "react";
import Introduction from "../../components/Introduction";
import IntroductionBehavior from "../../components/IntroductionBehavior";
import Video from "../../components/Video";
import BehaviorQuestionnaire from "../../components/BehaviorQuestionnaire";

const AdIrrelevant_ChooseToWatch = () => {
  const adType = "AdIrrelevant";
  const interactionMode = "ChooseToWatch";
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{
    [key: string]: string | Record<string, string>;
  }>({
    condition: "8",
  });

  const handleNextPage = (
    key?: string,
    value?: string | Record<string, string>,
  ) => {
    if (key != null && value != null) {
      setFormData((prevData) => ({
        ...prevData,
        key: value,
      }));
    }

    setStep(step + 1);
  };

  const showStep = () => {
    switch (step) {
      case 0:
        return <Introduction onSubmit={handleNextPage} keyName="name" />;
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
            keyName="behavior_1"
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

export default AdIrrelevant_ChooseToWatch;
