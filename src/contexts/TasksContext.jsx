/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const TasksContext = createContext({
  tasks: [],
  changeTasks: () => {},
});
const newTasks = localStorage.getItem("localTasks");
const allTasks = [
  {
    id: 0,
    title: "Title 1",
    description: "This is a test task",
    checked: false,
  },
  {
    id: 1,
    title: "Title 2",
    description: "This is another test task",
    checked: true,
  },
];
function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState(JSON.parse(newTasks) || allTasks);
  useEffect(() => {
    const newTasks = localStorage.getItem("localTasks");
    if (!newTasks) return;
    setTasks(JSON.parse(newTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TasksContext.Provider value={{ tasks, changeTasks: setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContextProvider, TasksContext };
