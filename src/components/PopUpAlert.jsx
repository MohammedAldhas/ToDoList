import { Alert } from "@mui/material";
import { AlertContext } from "../contexts/AlertContext";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../contexts/LangContext";
// eslint-disable-next-line react/prop-types
export default function PopUpAlert({ actions }) {
  const { setAlertText } = useContext(AlertContext);
  const { lang } = useContext(LangContext);
  const texts = {
    en: `Task ${
      actions === "add" ? "added" : actions === "edit" ? "edited" : "deleted"
    } successfully`,

    ar: `تم  ${
      actions === "add" ? "اضافة" : actions === "edit" ? "تعديل" : "حذف"
    } المهمة بنجاح`,
  };
  const [text, setText] = useState(texts.en);

  useEffect(() => {
    lang == "en" ? setText(texts.en) : setText(texts.ar);
  }, [lang]);
  return (
    <Alert
      className={`w-fit p-2 px-3 absolute top-1 left-2/4 -translate-x-2/4 rounded-2xl shadow  `}
      variant="filled"
      severity={
        actions === "add" ? "success" : actions === "edit" ? "info" : "error"
      }
      onClose={() => setAlertText(false)}
    >
      <p className="flex-1 text-nowrap">{text}</p>
    </Alert>
  );
}
