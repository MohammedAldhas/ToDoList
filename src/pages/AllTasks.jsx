/* eslint-disable react/prop-types */

import MyList from "../components/MyList";
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

function AllTasks() {
  const { tasks } = useContext(TasksContext);

  return (
    (tasks?.length > 0 && <MyList ubdatedTasks={tasks} />) || (
      <h1 className="text-center ">ليست لديك أي مهام </h1>
    )
  );
}

export default AllTasks;
