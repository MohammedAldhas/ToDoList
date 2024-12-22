import { Button, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { BackDropContext } from "../contexts/backdropContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import { LangContext } from "../contexts/LangContext";
import TaskForm from "./TaskForm";

import { v4 as uuidv4 } from "uuid";

function Footer() {
  const backDropContext = useContext(BackDropContext);
  const { dark } = useContext(DarkThemeContext);
  const { lang } = useContext(LangContext);

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
    backDropContext.actionEdit("add");
    backDropContext.handleOpen();
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
      {backDropContext.open && backDropContext.actions == "add" && (
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
