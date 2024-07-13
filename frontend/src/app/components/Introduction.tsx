import { useState } from "react";
import Button from "./Button";

interface IntroductionProps {
  onSubmit: (key: string, value: string) => void;
  keyName: string;
}

const Introduction: React.FC<IntroductionProps> = ({ onSubmit, keyName }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(keyName, value);
  };

  return (
    <>
      <p className="mb-8 text-xl">
        您好，感謝您參與本實驗，實驗分為以下 2 個部分：
      </p>
      <p className="mb-4 text-xl">
        （一）影片觀賞：請您觀看 2 部寵物影片與 2
        部運動影片，影片中會跳出廣告，請您完整觀看每一部影片並填寫相關問題，預計花費
        15-20 分鐘。
      </p>
      <p className="mb-20 text-xl">
        （二）基本資料與社群影音使用調查：請您填寫個人基本資料與日常觀看社群影音的問題，預計花費
        3-5 分鐘。
      </p>
      <p className="mb-8 text-xl">
        提醒您，請仔細閱讀說明文字與問題；另外，操作本實驗時請勿返回前一頁或任意操作影片時間軸，否則將影響實驗結果，謝謝！
      </p>
      <p className="mb-8 text-center text-xl">
        閱讀以上說明後請填寫您的完整中文姓名並點選按鈕進入下一頁
      </p>
      <form onSubmit={handleSubmit} className="m-auto w-fit">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="姓名"
          className="mb-4 mr-4 w-56 rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <Button
          context="提交並進入下一頁"
          width="w-40"
          disabled={value === ""}
        />
      </form>
    </>
  );
};

export default Introduction;
