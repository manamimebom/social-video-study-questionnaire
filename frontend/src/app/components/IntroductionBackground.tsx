import Button from "./Button";

interface IntroductionBackgroundProps {
  onSubmit: (key?: string, value?: string) => void;
}

const IntroductionBackground: React.FC<IntroductionBackgroundProps> = ({
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(undefined, undefined);
  };

  return (
    <>
      <p className="mb-4 text-xl tracking-wide -indent-3">第二部分：</p>
      <p className="mb-20 text-xl leading-loose tracking-[.01em]">
        感謝您參與以上實驗，為了清楚理解與分析實驗結果，最後需要請您針對個人相關資料與社群影音觀賞習慣的問題進行填答。您的個人資料將被嚴格保密，所有個人相關資料僅用於研究團隊內部使用，我們會嚴格保護您的個人隱私，研究結果僅以匿名與統計的方式呈現。
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

export default IntroductionBackground;
