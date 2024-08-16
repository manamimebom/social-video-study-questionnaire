import { useState } from "react";
import Button from "./Button";

interface IntroductionProps {
  onSubmit: (key: string, value: string) => void;
  formDataKey: string;
}

const Introduction: React.FC<IntroductionProps> = ({
  onSubmit,
  formDataKey,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formDataKey, value);
  };

  return (
    <>
      <p className="mb-8 text-center text-2xl font-bold tracking-[.01em]">
        實驗參與同意書
      </p>
      <p className="mb-4 text-xl tracking-[.01em]">
        您好，感謝您百忙之中撥冗參與本實驗，這項實驗的目的是為了探討觀眾在觀看社群影音與廣告時對網頁的使用感受，您的參與對於本研究意義重大。若您有意參與實驗，請仔細閱讀參與同意書後並簽名，再次感謝您對本研究大力支持與協助！
      </p>
      <p className="mb-4 text-xl font-bold tracking-[.01em]">實驗流程</p>
      <p className="mb-4 text-xl leading-relaxed tracking-[.01em]">
        實驗地點為管理學院教研館 114A
        網際網路資訊行為實驗室，我們將請您使用本實驗室的電腦進行影片觀賞的實驗，您在實驗過程中如有任何疑慮可以隨時終止，試驗過程中或是結束後若有任何問題歡迎隨時聯繫研究人員。完成本實驗總計約
        20-30 分鐘，實驗分成以下 3 個部分：
      </p>
      <ol className="mb-4 list-inside list-decimal text-xl leading-relaxed tracking-[.01em]">
        <li className="mb-3">
          影片觀賞：請您觀看 2 部運動影片與 2
          部寵物影片，影片中會跳出廣告，請您完整觀看每一部影片並填寫相關問題，預計花費
          15-20 分鐘。
        </li>
        <li className="mb-3">
          影片觀賞體驗調查：請您根據上述 4 部影片的觀看體驗回答問題，預計花費
          2-3 分鐘。
        </li>
        <li>
          基本資料與社群影音使用調查：請您填寫個人基本資料與日常觀看社群影音的問題，預計花費
          2-3 分鐘。
        </li>
      </ol>
      <p className="mb-4 text-xl font-bold tracking-[.01em]">費用與獲益</p>
      <p className="mb-4 text-xl leading-relaxed tracking-[.01em]">
        本研究不會向您收取任何費用，亦不會有任何獲益。為了感謝與補償您參與本實驗所花費的時間與精神，若您全程參與實驗，實驗結束後您會獲得現金
        100 元新台幣。
      </p>
      <p className="mb-4 text-xl font-bold tracking-[.01em]">隱私</p>
      <p className="mb-4 text-xl leading-relaxed tracking-[.01em]">
        本研究結果可能會在學術期刊/書籍上發表，資料結果將以集體數據方式呈現，確保第三方不會根據研究資料辨識出您的身份。您所填寫之任何資料絕對保密，絕對不會將您的個人資料販售或是洩漏予第三方，亦不會移作任何商業使用，以保護您個人隱私。
      </p>
      <p className="mb-4 text-xl font-bold tracking-[.01em]">傷害聲明</p>
      <p className="mb-4 text-xl leading-relaxed tracking-[.01em]">
        實驗過程不會損害您的身體及心理健康，請安心填答。
      </p>
      <p className="mb-4 text-xl font-bold tracking-[.01em]">
        實驗受測者同意聲明
      </p>
      <p className="mb-12 text-xl leading-relaxed tracking-[.01em]">
        我聲明我已經被告知本研究的研究目的、流程、潛在獲益及費用、隱私相關說明。我所有問題都已得到滿意的答案，我已經詳細閱讀本實驗參與同意書，下面的簽名表明我願意參加本研究。
      </p>
      <p className="mb-4 text-center text-xl">
        閱讀實驗參與同意書後請填寫您的完整中文姓名並點選按鈕進入下一頁
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
