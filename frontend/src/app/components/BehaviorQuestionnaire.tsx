import React, { useState } from "react";
import Button from "./Button";

interface BehaviorQuestionnaireProps {
  onSubmit: (key?: string, value?: Record<string, string>) => void;
  formDataKey: string;
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

const BehaviorQuestionnaire: React.FC<BehaviorQuestionnaireProps> = ({
  onSubmit,
  formDataKey,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (question: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formDataKey, answers);
  };

  return (
    <>
      <p className="mb-8 text-xl">
        提醒您，請仔細閱讀說明文字與問題；另外，操作本實驗時請勿返回前一頁或任意操作影片時間軸，否則將影響實驗結果，謝謝！
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        {adsQuestions.map((question, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-xl">{question}</label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={value}
                    checked={answers[question] === value.toString()}
                    onChange={() => handleChange(question, value.toString())}
                    className="form-radio text-blue-600"
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="m-auto w-fit">
          <Button context="提交並進入下一頁" width="w-40" noAction={true} />
        </div>
      </form>
    </>
  );
};

export default BehaviorQuestionnaire;
