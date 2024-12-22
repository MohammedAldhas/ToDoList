/* eslint-disable react/prop-types */
import { Backdrop, Button } from "@mui/material";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
export default function DeleteAlert({
  chosenTask,
  deleteTask,
  setdeleteAlert,
  deleteAlert,
}) {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(DarkThemeContext);
  return (
    <Backdrop
      sx={{
        direction: lang == "en" ? "ltr" : "rtl",
        fontSize: "20px",
        zIndex: 100,
      }}
      open={deleteAlert}
      className="backdrop-blur-sm "
    >
      <div
        className={`border flex flex-col justify-between gap-3 p-3 rounded  w-2/4 md:w-[40%] text-start ${
          dark ? "bg-[#121212]" : "bg-[#ffffff]"
        } `}
      >
        <h2>
          {lang == "en" ? "Do you want to delete" : "هل تريد حذف"} (
          {chosenTask?.title}) {lang == "en" ? "?" : "؟"}
        </h2>
        {/* <Divider /> */}

        <div className="flex justify-end mt-4">
          <Button
            sx={{ textTransform: "capitalize" }}
            color="error"
            variant="text"
            onClick={() => setdeleteAlert(false)}
          >
            {lang == "en" ? "cancel" : "الغاء"}
          </Button>
          <Button
            color="error"
            variant="text"
            sx={{ textTransform: "capitalize" }}
            onClick={deleteTask}
          >
            {lang == "en" ? "delete" : "حذف"}
          </Button>
        </div>
      </div>
    </Backdrop>
  );
}
