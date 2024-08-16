import React, { useEffect, useState } from "react";
import Button from "./Button";

interface BackgroundQuestionnaireProps {
  formDataKey: string;
  onSubmit: (key?: string, value?: Record<string, string>) => void;
}

const BackgroundQuestionnaire: React.FC<BackgroundQuestionnaireProps> = ({
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

  const handleMultipleChoiceChange = (
    question_index: string,
    value: string,
  ) => {
    const selectedValues = answers[question_index]?.split(",") || [];
    if (selectedValues.includes(value)) {
      selectedValues.splice(selectedValues.indexOf(value), 1);
    } else {
      selectedValues.push(value);
    }
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question_index]: selectedValues.join(","),
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
      Object.keys(answers).length === 8 &&
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
        <p className="mb-4 mt-12 -indent-5 text-xl font-bold">
          以下八題是關於您的基本資料：
        </p>
        <div className="space-y-8 p-0">
          <div
            key="question-1"
            className={`space-y-2 ${isErrors["1"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              1. 請問您的性別是？
            </label>
            <select
              defaultValue={"請選擇性別"}
              value={answers["1"]}
              onChange={(e) => handleChange("1", e.target.value.toString())}
              className="w-full rounded border p-2"
            >
              <option value="請選擇性別" disabled>
                請選擇性別
              </option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
            </select>
          </div>
          <div
            key="question-2"
            className={`space-y-2 ${isErrors["2"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              2. 請問您的年齡是？
            </label>
            <select
              defaultValue={"請選擇年齡"}
              value={answers["2"]}
              onChange={(e) => handleChange("2", e.target.value.toString())}
              className="w-full rounded border p-2"
            >
              <option value="請選擇年齡" disabled>
                請選擇年齡
              </option>
              <option value="14 歲以下">14 歲以下</option>
              <option value="15~19 歲">15~19 歲</option>
              <option value="20~24 歲">20~24 歲</option>
              <option value="25~29 歲">25~29 歲</option>
              <option value="30~34 歲">30~34 歲</option>
              <option value="35~39 歲">35~39 歲</option>
              <option value="40~44 歲">40~44 歲</option>
              <option value="45~49 歲">45~49 歲</option>
              <option value="50~54 歲">50~54 歲</option>
              <option value="55~59 歲">55~59 歲</option>
              <option value="60~64 歲">60~64 歲</option>
              <option value="65~69 歲">65~69 歲</option>
              <option value="70 歲以上">70 歲以上</option>
            </select>
          </div>
          <div
            key="question-3"
            className={`space-y-2 ${isErrors["3"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              3. 請問您的居住地區是？
            </label>
            <select
              defaultValue={"請選擇居住地區"}
              value={answers["3"]}
              onChange={(e) => handleChange("3", e.target.value.toString())}
              className="w-full rounded border p-2"
            >
              <option value="請選擇居住地區" disabled>
                請選擇居住地區
              </option>
              <option value="北部地區(台北市、新北市、基隆市、桃園市、新竹縣市、宜蘭縣)">
                北部地區(台北市、新北市、基隆市、桃園市、新竹縣市、宜蘭縣)
              </option>
              <option value="中部地區(苗栗縣、台中市、南投縣、彰化縣、雲林縣)">
                中部地區(苗栗縣、台中市、南投縣、彰化縣、雲林縣)
              </option>
              <option value="南部地區(嘉義縣市、台南市、高雄市、屏東縣)">
                南部地區(嘉義縣市、台南市、高雄市、屏東縣)
              </option>
              <option value="東部地區、離島、外島地區(花蓮縣、台東縣、澎湖縣、金門縣、連江縣(馬祖))">
                東部地區、離島、外島地區(花蓮縣、台東縣、澎湖縣、金門縣、連江縣(馬祖))
              </option>
            </select>
          </div>
          <div
            key="question-4"
            className={`space-y-2 ${isErrors["4"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              4. 請問您的學歷是？
            </label>
            <select
              defaultValue={"請選擇學歷"}
              value={answers["4"]}
              onChange={(e) => handleChange("4", e.target.value.toString())}
              className="w-full rounded border p-2"
            >
              <option value="請選擇學歷" disabled>
                請選擇學歷
              </option>
              <option value="高中／職及以下（含肄業）">
                高中／職及以下（含肄業）
              </option>
              <option value="專科（含肄業）">專科（含肄業）</option>
              <option value="大學（含肄業）">大學（含肄業）</option>
              <option value="研究所及以上（含肄業）">
                研究所及以上（含肄業）
              </option>
            </select>
          </div>
          <div
            key="question-5"
            className={`space-y-2 ${isErrors["5"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              5. 請問您的職業是？
            </label>
            <select
              defaultValue={"請選擇職業"}
              value={answers["5"]}
              onChange={(e) => handleChange("5", e.target.value.toString())}
              className="w-full rounded border p-2"
            >
              <option value="請選擇職業" disabled>
                請選擇職業
              </option>
              <option value="學生">學生</option>
              <option value="公/私人企業主管階層">公/私人企業主管階層</option>
              <option value="公/私人企業一般職員">公/私人企業一般職員</option>
              <option value="勞務工作者主管階層">勞務工作者主管階層</option>
              <option value="勞務工作者一般人員">勞務工作者一般人員</option>
              <option value="自營商">自營商</option>
              <option value="自由業（律師、會計師、建築師、SOHO）">
                自由業（律師、會計師、建築師、SOHO）
              </option>
              <option value="家務工作者（主婦／主夫）">
                家務工作者（主婦／主夫）
              </option>
              <option value="待業中/無業">待業中/無業</option>
              <option value="退休">退休</option>
              <option value="其它">其它</option>
            </select>
          </div>
          <div
            key="question-6"
            className={`space-y-2 ${isErrors["6"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              6. 過去一年內，請問您有使用下列哪管道收看影音內容？（可複選）
            </label>
            {[
              "一般電視(含無線和有線電視)",
              "MOD",
              "智慧電視盒(如:小米盒子、APPLE TV)",
              "社群網路平台(如:YouTube、FB影片)",
              "網路影音串流平台OTT(如:Netflix、MyVideo)",
              "遊戲主機(如:PS4、PS5、XBOX等)",
              "其他",
              "幾乎不看影音內容",
            ].map((option, i) => (
              <div key={i} className="mb-2 text-lg">
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) =>
                      handleMultipleChoiceChange("6", e.target.value.toString())
                    }
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div
            key="question-7"
            className={`space-y-2 ${isErrors["7"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              7. 過去一年內，請問您最主要使用下列哪個管道收看影音內容？（單選）
            </label>
            {[
              "一般電視(含無線和有線電視)",
              "MOD",
              "智慧電視盒(如:小米盒子、APPLE TV)",
              "社群網路平台(如:YouTube、FB影片)",
              "網路影音串流平台OTT(如:Netflix、MyVideo)",
              "遊戲主機(如:PS4、PS5、XBOX等)",
              "其他",
              "幾乎不看影音內容",
            ].map((option, i) => (
              <div key={i} className="mb-2 text-lg">
                <label>
                  <input
                    type="radio"
                    value={option}
                    onChange={(e) =>
                      handleChange("7", e.target.value.toString())
                    }
                    checked={answers["7"] === option}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div
            key="question-8"
            className={`space-y-2 ${isErrors["8"] ? "text-red-600" : ""}`}
          >
            <label className="mb-3 mt-6 block -indent-4 text-xl">
              8. 過去一年內，請問您較常收看哪些內容類型的社群影音？（可複選）
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "音樂（如:創作、歌曲cover、演奏、舞蹈）",
                "教學（如:語文、做菜、DIY手作）",
                "趣味搞笑",
                "購物/消費",
                "影片創作（如:Reaction、二創、原創劇情短片）",
                "餐飲/美食",
                "遊戲教學/直播",
                "健康/保健",
                "卡通/動畫",
                "旅遊/戶外活動",
                "產品評測/開箱",
                "股市/理財投資",
                "科學/知識",
                "汽車/機車",
                "親子/育兒",
                "寵物/毛小孩",
                "運動/體育/健身",
                "異國文化",
                "生活影片（如:Vlogs、生活紀錄）",
                "植物/園藝",
                "明星/名人訪問",
                "建築/室內設計",
                "時事/政治評論",
                "其它",
                "時尚/美妝/穿搭",
                "近一年幾乎沒有在看社群影音",
              ].map((option, i) => (
                <div key={i} className="mb-2 text-lg">
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      onChange={(e) =>
                        handleMultipleChoiceChange(
                          "8",
                          e.target.value.toString(),
                        )
                      }
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto my-6 w-fit">
          <Button
            context={"提交"}
            width="w-40"
            disabled={!isNextStepEnabled}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default BackgroundQuestionnaire;
