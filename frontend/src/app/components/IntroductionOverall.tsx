import Button from "./Button";

interface IntroductionOverallProps {
  onSubmit: (key?: string, value?: string) => void;
}

const IntroductionOverall: React.FC<IntroductionOverallProps> = ({
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(undefined, undefined);
  };

  return (
    <>
      <p className="mb-4 -indent-3 text-xl tracking-wide">第二部分：</p>
      <p className="mb-20 text-xl leading-loose tracking-[.01em]">
        接下來，我們需要您針對以上四部影片的觀看體驗回答相關問題。
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

export default IntroductionOverall;
