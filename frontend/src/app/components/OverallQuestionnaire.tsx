import React, { useEffect, useState } from "react";
import Button from "./Button";

interface OverallQuestionnaireProps {
  formDataKey: string;
  onSubmit: (key?: string, value?: Record<string, string>) => void;
}

const overallQuestions = [
  "1. 當廣告播放前，我會被提示廣告即將播放",
  "2. 當廣告播放前，我會被詢問是否要觀看廣告",
  "3. 當廣告播放後，我會被詢問是否要略過廣告",
  "4. 當我看到影片中的廣告，我認為這則廣告與這部影片相配",
  "5. 當我看到影片中的廣告，我認為這則廣告很適合這部影片",
  "6. 當我看到影片中的廣告，我認為這則廣告與這部影片很有相關性",
  "7. 當我看到影片中的廣告，我認為這則廣告與這部影片很搭",
];

const OverallQuestionnaire: React.FC<OverallQuestionnaireProps> = ({
  formDataKey,
  onSubmit,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isErrors, setIsErrors] = useState<Record<string, boolean>>({});
  const [isNextStepEnabled, setIsNextStepEnabled] = useState<boolean>(false);

  const handleChange = (question_index: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question_index]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formDataKey, answers);
  };

  useEffect(() => {
    const maxProgress = Math.max(...Object.keys(answers).map(Number));
    for (let i = 1; i <= maxProgress; i++) {
      if (answers[i] === undefined || answers[i] === "") {
        setIsErrors((prevErrors) => ({ ...prevErrors, [i]: true }));
      } else {
        setIsErrors((prevErrors) => ({ ...prevErrors, [i]: false }));
      }
    }
    if (
      Object.keys(answers).length === overallQuestions.length &&
      Object.values(answers).every((value) => value !== "")
    ) {
      setIsNextStepEnabled(true);
    } else {
      setIsNextStepEnabled(false);
    }
  }, [answers]);

  return (
    <>
      <form>
        <p className="mb-4 mt-8 -indent-5 text-xl font-bold">
          針對以上四部影片的觀看體驗，下列陳述需要您進行填答
          <span className="font-semibold underline">
            （1 為非常不同意；7 為非常同意）
          </span>
          ：
        </p>
        <div className="space-y-8 p-0">
          {overallQuestions.map((question, index) => (
            <div
              key={`question-${index + 1}`}
              className={`space-y-2 ${isErrors[index + 1] ? "text-red-600" : ""}`}
            >
              <label className="mb-3 mt-6 block -indent-4 text-xl">
                {question}
              </label>
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
        </div>
        <div className="mx-auto my-6 w-fit">
          <Button
            context={"下一頁"}
            width="w-40"
            disabled={!isNextStepEnabled}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default OverallQuestionnaire;
