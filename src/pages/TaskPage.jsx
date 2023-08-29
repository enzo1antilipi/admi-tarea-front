import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { TaskCard } from "../components/TaskCard";

export const TaskPage = () => {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);
  //con el useffect le decimos que se ejecute apenas cargue el componente Taskpage y con el array de dependecia
  //vacio le decimos que se ejecute una sola vez

  if (tasks.length === 0) return <h1>No tasks</h1>;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};
