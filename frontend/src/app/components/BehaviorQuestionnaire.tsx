import React, { useEffect, useState } from "react";
import Button from "./Button";

interface BehaviorQuestionnaireProps {
  onSubmit: (key?: string, value?: Record<string, string>) => void;
  formDataKey: string;
  oldAnswers?: Record<string, string>;
  showAdsQuestions?: boolean;
  showVideoQuestions?: boolean;
  lastBehaviorQuestionnaire?: boolean;
}

const adsQuestions = [
  "1. 當我看到影片中的廣告，我認為這則廣告是對我有用的",
  "2. 當我看到影片中的廣告，我認為這則廣告是對我重要的",
  "3. 當我看到影片中的廣告，我認為這則廣告是我所關心的",
  "4. 當我看到影片中的廣告，我認為這則廣告是與我有關的",
  "5. 當我看到影片中的廣告，我認為這則廣告是對我很有意義的",
  "6. 當我看到影片中的廣告，我認為這則廣告是對我有價值的",
  "7. 當我看到影片中的廣告，我認為這則廣告與這部影片相配",
  "8. 當我看到影片中的廣告，我認為這則廣告很適合這部影片",
  "9. 當我看到影片中的廣告，我認為這則廣告與這部影片有相關性",
  "10. 當我看到影片中的廣告，我認為這則廣告與這部影片很搭",
];

const videoQuestions = [
  "1. 我感覺我很能夠掌握我的觀看體驗",
  "2. 在觀看這部影片時，我能夠自由選擇我想在螢幕上觀看的廣告",
  "3. 在觀看這部影片時，我完全不能控制螢幕上的廣告",
  "4. 在觀看這部影片時，我對廣告的動作決定了我會有什麼樣的體驗",
];

const BehaviorQuestionnaire: React.FC<BehaviorQuestionnaireProps> = ({
  onSubmit,
  formDataKey,
  oldAnswers = {},
  showAdsQuestions = true,
  showVideoQuestions = true,
  lastBehaviorQuestionnaire = false,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isNextStepEnabled, setIsNextStepEnabled] = useState<boolean>(false);

  const handleChange = (question_index: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ...oldAnswers,
      [question_index]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formDataKey, answers);
  };

  useEffect(() => {
    if (showAdsQuestions && Object.keys(answers).length === 14) {
      setIsNextStepEnabled(true);
    } else if (
      !showAdsQuestions &&
      showVideoQuestions &&
      Object.keys(answers).length === 4
    ) {
      setIsNextStepEnabled(true);
    }
  }, [answers, showAdsQuestions, showVideoQuestions]);

  return (
    <>
      {showAdsQuestions && (
        <div key="ads-questions">
          <p className="mb-4 mt-8 text-xl font-medium">
            針對上部影片中出現的廣告，下列陳述需要您進行填答（1為非常不同意；7為非常同意）：
          </p>
          <form onSubmit={handleSubmit} className="space-y-8 p-4">
            {adsQuestions.map((question, index) => (
              <div key={`question-${index + 1}`} className="space-y-2">
                <label className="block text-xl">{question}</label>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                    <label key={value} className="flex flex-col space-y-2">
                      <span className="text-xl">{value}</span>
                      <input
                        type="radio"
                        name={`answer-${index + 1}`}
                        value={value}
                        checked={answers[index + 1] === value.toString()}
                        onChange={() =>
                          handleChange((index + 1).toString(), value.toString())
                        }
                        className="scale-150 border-gray-700 text-blue-600 drop-shadow"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </form>
        </div>
      )}
      {showVideoQuestions && (
        <div key="video-questions">
          <p className="mb-4 mt-8 text-xl">
            針對上部影片的觀看體驗，下列陳述需要您進行填答（1為非常不同意；7為非常同意）：
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            {videoQuestions.map((question, index) => (
              <div
                key={`question-${index + 1 + adsQuestions.length}`}
                className="space-y-2"
              >
                <label className="block text-xl">{question}</label>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                    <label key={value} className="flex flex-col space-y-2">
                      <span className="text-xl">{value}</span>
                      <input
                        type="radio"
                        name={`answer-${index + 1 + adsQuestions.length}`}
                        value={value}
                        checked={
                          answers[index + 1 + adsQuestions.length] ===
                          value.toString()
                        }
                        onChange={() =>
                          handleChange(
                            (index + 1 + adsQuestions.length).toString(),
                            value.toString(),
                          )
                        }
                        className="scale-150 border-gray-700 text-xl text-blue-600 drop-shadow"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </form>
        </div>
      )}
      <div className="mx-auto my-6 w-fit">
        <Button
          context={
            !showAdsQuestions || lastBehaviorQuestionnaire
              ? "下一頁"
              : "觀看下一部影片"
          }
          width="w-40"
          disabled={!isNextStepEnabled}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default BehaviorQuestionnaire;
