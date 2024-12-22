/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useEffect, useState, useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export default function UncompletedTasks() {
  const [untasks, setunTasks] = useState([]);
  const { tasks } = useContext(TasksContext);

  useEffect(() => {
    if (!tasks) {
      return;
    }

    const unCompletedTasks = tasks.filter((task) => {
      return task.checked == false;
    });
    setunTasks(unCompletedTasks);
  }, [tasks]);

  return (
    (untasks.length > 0 && <MyList ubdatedTasks={untasks} />) || (
      <h1 className="text-center ">ليست لديك مهام غير منجزة</h1>
    )
  );
}
