/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksActions";
const TasksContext = createContext({
  tasks: [],
  dispatch: () => {},
});
const newTasks = localStorage.getItem("localTasks");
function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    JSON.parse(newTasks) || []
  );
  // const [tasks, setTasks] = useState(JSON.parse(newTasks) || []);
  useEffect(() => {
    const newTasks = localStorage.getItem("localTasks");
    if (!newTasks) return;
    // setTasks(JSON.parse(newTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContextProvider, TasksContext };
