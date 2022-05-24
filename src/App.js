import React, { useState } from "react";
import { Container, Badge } from "react-bootstrap";
import "./App.css";
import TaskForm from "./components/TaskForm";

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
        <Container className="p-5 mb-4">
          {taskList.length > 0 ? (
            <h3>
              Your ToDo Tasks! <Badge bg="secondary">{taskList.length}</Badge>
            </h3>
          ) : (
            <div>
              <h3>You do not have any task</h3>
              <p>Add a task to track work!</p>
            </div>
          )}
          <div className="tasklist-content">
            {taskList.map((item) => (
              <div key={item.task}>
                <h4>
                  {item.firstname} {item.lastname}
                </h4>
                <h6>{item.task}</h6>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default App;
