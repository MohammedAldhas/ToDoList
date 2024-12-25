/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import TaskForm from "./TaskForm";
import {
  ListItem,
  ListItemButton,
  IconButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  List,
} from "@mui/material";
import { Pencil, Trash2 } from "lucide-react";

import DeleteAlert from "./DeleteAlert";
import { useAlert } from "../contexts/AlertContext";
import { useBackdrop } from "../contexts/BackdropContext";
import { useLang } from "../contexts/LangContext";
import { TasksContext } from "../contexts/TasksContext";

function MyList({ ubdatedTasks }) {
  const [hoveredTaskId, setHoveredTaskId] = useState(null);
  const [deleteAlert, setdeleteAlert] = useState(false);

  const { actions, actionEdit, handleOpen } = useBackdrop();

  const { setAlertText } = useAlert();
  const [chosenTask, setChosenTask] = useState(null);
  const { lang } = useLang();
  const { dispatch } = useContext(TasksContext);
  // const [tasks, dispatch] = useReducer(tasksReducer, []);
  function onChek(taskID) {
    dispatch({ type: "checked", payload: { taskID } });
  }
  function deleteTask() {
    dispatch({ type: "deleted", payload: { id: chosenTask.id } });
    setAlertText(true);
    setdeleteAlert(false);
  }
  return (
    <>
      <List
        dir={lang == "en" ? "ltr" : "rtl"}
        className=" flex flex-col gap-2 "
        sx={{ width: "100%" }}
      >
        {ubdatedTasks.map((task) => (
          <ListItem
            color="primary"
            key={task.id}
            onMouseEnter={() => setHoveredTaskId(task.id)}
            onClick={() => {
              setChosenTask(task);
            }}
            onMouseLeave={() => setHoveredTaskId(null)}
            sx={{
              borderRadius: 2,
            }}
            className="shadow border flex border-mainColor hover:shadow-none hover:border-[#0096884a]"
            disablePadding
          >
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon>
                <Checkbox
                  className=" text-mainColor"
                  onClick={() => onChek(task.id)}
                  edge="start"
                  checked={task.checked}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  textAlign: "start",
                  textDecoration: `${task.checked && "line-through"}`,
                }}
                id={task.id}
                primary={task.title}
                secondary={task.description}
              />
              <div
                className={` ${
                  hoveredTaskId === task.id ? "flex" : "hidden"
                } justify-around gap-1 `}
              >
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    actionEdit("edit");

                    handleOpen();
                  }}
                >
                  <Pencil size={16} className="text-editColor" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setdeleteAlert(true);
                    setAlertText(false);
                  }}
                >
                  <Trash2 size={16} className="text-deletColor" />
                </IconButton>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {open && actions == "edit" && (
        <TaskForm chosenTask={chosenTask} setChosenTask={setChosenTask} />
      )}

      {deleteAlert && (
        <DeleteAlert
          chosenTask={chosenTask}
          deleteTask={deleteTask}
          deleteAlert={deleteAlert}
          setdeleteAlert={setdeleteAlert}
        />
      )}
    </>
  );
}

export default MyList;
