import React, { useState } from "react";
import { Container, Badge, Table } from "react-bootstrap";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const task = {
    firstname: "",
    lastname: "",
    task: "",
  };

  const [taskList, setTaskList] = useState([
    {
      firstname: "Joaquin",
      lastname: "Perez",
      task: "Compras",
    },
    {
      firstname: "Fulanito",
      lastname: "Lopez",
      task: "Lavado",
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
      newTask.task !== ""
    ) {
      setTaskList([...taskList, newTask]);
    } else {
      setAlert((prevAlert) => !prevAlert);
      setTimeout(() => {
        setAlert((prevAlert) => !prevAlert);
      }, 4000);
    }
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
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
};

export default App;
