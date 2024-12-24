import { Button, Divider } from "@mui/material";
import { useState } from "react";

import TaskForm from "./TaskForm";

import { v4 as uuidv4 } from "uuid";
import { useBackdrop } from "../contexts/BackdropContext";
import { useDarkTheme } from "../contexts/DarkThemeContext";
import { useLang } from "../contexts/LangContext";

function Footer() {
  const { open, actions, handleOpen, actionEdit } = useBackdrop();
  const { dark } = useDarkTheme();
  const { lang } = useLang();

  const [newTask, setnewTask] = useState({
    id: null,
    title: "",
    description: "",
    checked: false,
  });

  function clear() {
    setnewTask((pre) => {
      return { ...pre, title: "", description: "", checked: false };
    });
  }
  function addNewTask() {
    let myuuid = uuidv4();
    setnewTask((pr) => {
      return { ...pr, id: myuuid };
    });
    actionEdit("add");
    handleOpen();
    clear();
  }
  return (
    <div className=" w-full flex flex-col gap-2 mt z-0">
      <Divider />
      <div
        className="flex items-end  w-full justify-end gap-1 "
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <Button
          variant={dark ? "outlined" : "contained"}
          color="primary"
          className="w-fit capitalize"
          onClick={addNewTask}
        >
          {lang == "en" ? "New Task" : "مهمه جديدة"}
        </Button>
      </div>
      {open && actions == "add" && (
        <TaskForm
          chosenTask={newTask}
          setChosenTask={setnewTask}
          clear={clear}
        />
      )}
    </div>
  );
}

export default Footer;
