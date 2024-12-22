/* eslint-disable react/prop-types */
import { Button, TextField, Divider, Backdrop } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BackDropContext } from "../contexts/backdropContext";
import { TasksContext } from "../contexts/TasksContext";
import { AlertContext } from "../contexts/AlertContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import { LangContext } from "../contexts/LangContext";

export default function TaskForm({ chosenTask, setChosenTask, clear }) {
  const backDropContext = useContext(BackDropContext);
  const taskcontext = useContext(TasksContext);
  const { setAlertText } = useContext(AlertContext);
  const { lang } = useContext(LangContext);

  const { dark } = useContext(DarkThemeContext);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (!chosenTask.title) {
      return;
    }
    const titleFind = taskcontext?.tasks?.find((t) => {
      if (backDropContext.actions == "edit") {
        if (chosenTask.id != t.id) {
          return chosenTask.title == t.title;
        }
      } else {
        return chosenTask.title == t.title;
      }
    });

    titleFind ? setErr(true) : setErr(false);
  }, [chosenTask.title]);

  return (
    <Backdrop
      dir={lang == "en" ? "ltr" : "rtl"}
      className="backdrop-blur-sm z-50"
      open={backDropContext.open}
    >
      <div
        className={`border flex flex-col justify-between gap-3 p-2 pt-10 rounded w-2/3 md:w-2/5 ${
          dark ? "bg-[#121212]" : "bg-[#ffffff]"
        }`}
      >
        <TextField
          placeholder={lang == "en" ? "Task Name:" : "عنوان المهمة"}
          label={lang == "en" ? "Title" : "العنوان"} //"Title"
          variant="outlined"
          required
          value={chosenTask.title}
          onChange={(e) => {
            setChosenTask((pre) => {
              return { ...pre, title: e.target.value };
            });
          }}
        />

        <TextField
          placeholder={lang == "en" ? "Task Description:" : "وصف المهمة"}
          id="outlined-basic"
          label={lang == "en" ? "Description" : "الوصف"} //"Description"
          lang="ar"
          multiline
          variant="outlined"
          value={chosenTask.description}
          onChange={(e) => {
            setChosenTask((pre) => {
              return { ...pre, description: e.target.value };
            });
          }}
        />
        {err && (
          <p className="text-error text-sm">
            {lang == "en"
              ? "Task title is alredy there!"
              : "عنوان المهمة موجود بالفعل !"}
          </p>
        )}
        <Divider />
        <div
          className={"flex w-full  gap-1 justify-end"}
          dir={lang == "en" ? "ltr" : "rtl"}
        >
          <Button
            variant="outlined"
            className="w-24 capitalize"
            color="error"
            onClick={() => {
              backDropContext.handleClose();
            }}
          >
            {lang == "en" ? "cancel" : "الغاء"}
          </Button>
          <Button
            variant={dark ? "outlined" : "contained"}
            disabled={!chosenTask.title || err}
            color="primary"
            className="w-24 capitalize"
            sx={{}}
            onClick={() => {
              if (backDropContext.actions == "add") {
                taskcontext.changeTasks((pre) => {
                  return [...pre, chosenTask];
                });

                clear();
              } else {
                let editTask = taskcontext.tasks.map((t) => {
                  if (t.id == chosenTask.id) {
                    return chosenTask;
                  } else return t;
                });

                taskcontext.changeTasks(editTask);
              }

              backDropContext.handleClose();
              setAlertText(true);
            }}
          >
            {backDropContext.actions == "add"
              ? lang == "en"
                ? "add"
                : "اضافة"
              : lang == "en"
              ? "edit"
              : "تعديل"}
          </Button>
        </div>
      </div>
    </Backdrop>
  );
}
