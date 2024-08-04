"use server";
import { doc } from "../../services/google-spreadsheet";

export default async function sendQuestionnaireResult(formData: {
  [key: string]: string | Record<string, string>;
}) {
  if (!formData) {
    console.error("No form data provided");
  }

  let data: { [key: string]: string } = {};
  data["condition"] = formData["condition"].toString();
  data["name"] = formData["name"].toString();
  for (let i = 1; i <= 4; i++) {
    data[`behavioral_control_${i}`] = (
      formData[`behavioral_control_${i}`] || ""
    ).toString();
    data[`decisional_control_${i}`] = (
      formData[`decisional_control_${i}`] || ""
    ).toString();
    for (let j = 1; j <= 14; j++) {
      data[`answer_part_a_${i}_${j}`] = (
        formData[`answer_part_a_${i}`] as Record<string, string>
      )[`${j}`];
    }
  }
  for (let i = 1; i <= 11; i++) {
    data[`answer_part_b_${i}`] = (
      formData["answer_part_b"] as Record<string, string>
    )[`${i}`];
  }
  data["submitted_at"] = new Date().toISOString();

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await await sheet.addRows([data]);
  } catch (error) {
    console.error(error);
  }
}
