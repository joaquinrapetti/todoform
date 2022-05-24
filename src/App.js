import React, { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const task = {
    firstname: "",
    lastname: "",
    date: "",
    task: "",
    taskType: "",
  };

  const [taskList, setTaskList] = useState([
    {
      firstname: "Joaquin",
      lastname: "Perez",
      date: "2022-05-21",
      task: "Compras",
      taskType: "secondary",
      completed: false,
    },
    {
      firstname: "Fulanito",
      lastname: "Lopez",
      date: "2022-04-13",
      task: "Lavado",
      taskType: "danger",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState(task);
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newTask.firstname !== "" &&
      newTask.lastname !== "" &&
      newTask.task !== "" &&
      newTask.taskType !== ""
    ) {
      setTaskList([...taskList, newTask]);
      setNewTask(task);
    } else {
      setAlert((prevAlert) => !prevAlert);
      setTimeout(() => {
        setAlert((prevAlert) => !prevAlert);
      }, 4000);
    }
  };

  const handleRemove = (taskId) => {
    console.log("Remove", taskId);
    const updatedTaskList = (prevTaskList) =>
      prevTaskList.filter((item) => item.task !== taskId);
    setTaskList(updatedTaskList);
  };

  const handleComplete = (taskId) => {
    console.log("Completed", taskId);
    const updatedTask = (prevTaskList) =>
      prevTaskList.map((item) => {
        if (item.task === taskId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    setTaskList(updatedTask);
    console.log(taskList);
  };

  return (
    <div className="app">
      <div className="left">
        <TaskForm
          onHandleChange={handleChange}
          onHandleSubmit={handleSubmit}
          newTask={newTask}
          alert={alert}
        />
      </div>
      <div className="right">
        <TaskList
          taskList={taskList}
          onHandleRemove={handleRemove}
          onHandleComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default App;
