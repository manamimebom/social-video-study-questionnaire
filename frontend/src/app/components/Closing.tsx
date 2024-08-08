import React from "react";

interface ClosingProps {
  formData: { [key: string]: string | Record<string, string> };
}

const Closing: React.FC<ClosingProps> = ({ formData }: ClosingProps) => {
  console.log(formData);
  return (
    <>
      <p className="mx-10 mb-20 text-xl tracking-[.01em]">
        實驗結束，再次感謝您參與本實驗！再次聲明，您的資料將受到我們嚴格保密，若有任何問題，歡迎您聯絡研究人員。
      </p>

      <p className="mx-60 mb-4 text-xl">
        研 究 生：{process.env.NEXT_PUBLIC_RESEARCHER_NAME}
      </p>
      <p className="mx-60 mb-4 text-xl">
        聯 絡 電 話：{process.env.NEXT_PUBLIC_RESEARCHER_PHONE}
      </p>
      <p className="mx-60 mb-4 text-xl">
        電 子 信 箱：{process.env.NEXT_PUBLIC_RESEARCHER_EMAIL}
      </p>
    </>
  );
};

export default Closing;
