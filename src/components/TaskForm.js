import React from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import TaskInput from "./TaskInput";

const TaskForm = ({ onHandleSubmit, onHandleChange, newTask, alert }) => {
  return (
    <Container className="p-5 mb-4">
      <Form onSubmit={onHandleSubmit}>
        <h3>Add a task to your tasklist</h3>
        <Form.Group className="mb-3 py-4" controlId="formBasic">
          <TaskInput
            type="text"
            name="firstname"
            placeholder="Firstname"
            onHandleChange={onHandleChange}
            value={newTask.firstname}
          />
          <TaskInput
            type="text"
            name="lastname"
            placeholder="Lastname"
            onHandleChange={onHandleChange}
            value={newTask.lastname}
          />
          {/* <Form.Control type="date" placeholder="Date" className="my-2" /> */}
          <TaskInput
            type="text"
            name="task"
            placeholder="Task..."
            onHandleChange={onHandleChange}
            value={newTask.task}
          />
          <TaskInput
            type="select"
            name="taskType"
            placeholder="Select type..."
            onHandleChange={onHandleChange}
            value={newTask.taskType}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Add New Task
        </Button>
      </Form>
      {alert && (
        <Alert variant="danger" className="my-4 text-center">
          Complete all input fields to add a new task.
        </Alert>
      )}
    </Container>
  );
};

export default TaskForm;
