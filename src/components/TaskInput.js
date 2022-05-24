import React from "react";
import { Form } from "react-bootstrap";

const TaskInput = ({ type, placeholder, name, onHandleChange, value }) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      className="my-2"
      name={name}
      onChange={onHandleChange}
      value={value}
    />
  );
};

export default TaskInput;
