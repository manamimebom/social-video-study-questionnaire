"use client";

import React, { useState } from "react";
import Introduction from "../../components/Introduction";
import IntroductionBehavior from "../../components/IntroductionBehavior";
import Video from "../../components/Video";

const AdRelevant_NoInteraction = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    condition: "1",
  });

  const handleNextPage = (key?: string, value?: string) => {
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
            videoType="relevantAdVideos"
            videoIdx={0}
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

export default AdRelevant_NoInteraction;
