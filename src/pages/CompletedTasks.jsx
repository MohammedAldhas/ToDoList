/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useMemo, useContext } from "react";

import { TasksContext } from "../contexts/TasksContext";
import { useLang } from "../contexts/LangContext";

function CompletedTasks() {
  const { tasks } = useContext(TasksContext);
  const { lang } = useLang();

  let mess = {
    ar: "ليست لديك مهام منجزة",
    en: "You don't hvae any completed task",
  };
  const completedTasks = useMemo(() => {
    return tasks?.filter((task) => {
      return task.checked == true;
    });
  }, [tasks]);

  return (
    (completedTasks.length > 0 && <MyList ubdatedTasks={completedTasks} />) || (
      <h1 className="text-center ">{lang == "en" ? mess.en : mess.ar}</h1>
    )
  );
}

export default CompletedTasks;
