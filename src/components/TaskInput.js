import React from "react";
import { Form } from "react-bootstrap";

const TaskInput = ({ type, placeholder, name, onHandleChange, value }) => {
  return (
    <div>
      {type === "select" ? (
        <Form.Select
          type={type}
          placeholder={placeholder}
          className="my-3"
          name="taskType"
          onChange={onHandleChange}
          value={value}
        >
          <option value="">-- Choose Task Type --</option>
          <option value="secondary">Normal Task</option>
          <option value="warning">Warning Task</option>
          <option value="urgent">Urgent Task</option>
        </Form.Select>
      ) : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          className="my-3"
          name={name}
          onChange={onHandleChange}
          value={value}
        />
      )}
    </div>
  );
};

export default TaskInput;
