/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { useLang } from "../contexts/LangContext";

function AllTasks() {
  const { tasks } = useContext(TasksContext);

  const { lang } = useLang();

  let mess = {
    ar: "ليست لديك أي مهام",
    en: "You don't hvae any tasks",
  };
  return (
    (tasks?.length > 0 && <MyList ubdatedTasks={tasks} />) || (
      <h1 className="text-center ">{lang == "en" ? mess.en : mess.ar}</h1>
    )
  );
}

export default AllTasks;
