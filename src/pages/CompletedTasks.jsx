/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useEffect, useState, useContext } from "react";

import { TasksContext } from "../contexts/TasksContext";

function CompletedTasks() {
  const [cotasks, setcoTasks] = useState([]);
  const { tasks } = useContext(TasksContext);

  useEffect(() => {
    if (!tasks) {
      return;
    }

    const completedTasks = tasks?.filter((task) => {
      return task.checked == true;
    });
    setcoTasks(completedTasks);
  }, [tasks]);

  return (
    (cotasks.length > 0 && <MyList ubdatedTasks={cotasks} />) || (
      <h1 className="text-center ">ليست لديك مهام منجزة</h1>
    )
  );
}

export default CompletedTasks;
