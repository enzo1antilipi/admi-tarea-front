import { useState } from "react";
import { createContext, useContext } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTasksRequest,
} from "../api/task";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Usetask must be used within a TaskProvider ");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  }; // esta funcion crea una nueva tarea

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id, task) => {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

//Nuestro taskcontext lo que hace es exportar el valor de nuestras tarea, esos valroes los colocamos en el value={}
