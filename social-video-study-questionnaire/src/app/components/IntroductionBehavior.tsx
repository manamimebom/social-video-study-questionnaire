import { useState } from "react";
import Button from "./Button";

interface IntroductionBehaviorProps {
  onSubmit: (key?: string, value?: string) => void;
}

const IntroductionBehavior: React.FC<IntroductionBehaviorProps> = ({
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(undefined, undefined);
  };

  return (
    <>
      <p className="mb-4 text-xl">第一部分：</p>
      <p className="mb-20 text-xl">
        請想像您在日常生活中瀏覽社群影音（如：YouTube），您將觀看 2 部寵物影片與
        2 部運動影片，每部影片中會置入
        <span className="font-semibold underline">與您或與該影片相關的</span>
        廣告影片，請根據螢幕的提示進行操作，
        <span className="font-semibold underline">
          勿任意點按暫停、移動影片時間軸或調整播放速度
        </span>
        ，每部影片觀看結束會請您回答與影片相關的問題以及網頁操作使用感受。
      </p>

      <p className="mb-4 text-center text-xl">
        閱讀以上說明後請點選按鈕進入實驗
      </p>
      <form onSubmit={handleSubmit} className="m-auto w-fit">
        <Button context="進入實驗" width="w-40" />
      </form>
    </>
  );
};

export default IntroductionBehavior;
