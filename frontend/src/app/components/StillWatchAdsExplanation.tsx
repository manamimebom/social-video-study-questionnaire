import { useState } from "react";
import Button from "./Button";

interface StillWatchAdsExplanationProps {
  onSubmit: (key?: string, value?: string) => void;
}

const StillWatchAdsExplanation: React.FC<StillWatchAdsExplanationProps> = ({
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(undefined, undefined);
  };

  return (
    <>
      <p className="mx-10 mb-20 text-xl tracking-[.01em]">
        為了幫助我們了解廣告與影片的相關性，仍需要請您觀看上一部影片中置入的廣告影片，並回答相關問題，非常感謝！
      </p>

      <p className="mb-4 text-center text-xl">
        閱讀以上說明後請點選按鈕進入下一頁
      </p>
      <form onSubmit={handleSubmit} className="m-auto w-fit">
        <Button context="下一頁" width="w-40" />
      </form>
    </>
  );
};

export default StillWatchAdsExplanation;
