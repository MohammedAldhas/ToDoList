/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useContext, useMemo } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { useLang } from "../contexts/LangContext";

export default function UncompletedTasks() {
  const { tasks } = useContext(TasksContext);
  const { lang } = useLang();

  let mess = {
    ar: "ليست لديك مهام غير منجزة",
    en: "You don't hvae any uncompleted task",
  };
  const unCompletedTasks = useMemo(() => {
    return tasks?.filter((task) => {
      return task.checked == false;
    });
  }, [tasks]);
  return (
    (unCompletedTasks.length > 0 && (
      <MyList ubdatedTasks={unCompletedTasks} />
    )) || <h1 className="text-center ">{lang == "en" ? mess.en : mess.ar}</h1>
  );
}
