import React from "react";
import "./TaskList.css";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

import {
  Container,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Badge,
  Alert,
} from "react-bootstrap";

const TaskList = ({ taskList, onHandleRemove, onHandleComplete }) => {
  return (
    <Container className="p-5">
      {taskList.length > 0 ? (
        <h3>
          Your ToDo Listt! <Badge bg="primary">{taskList.length}</Badge>
        </h3>
      ) : (
        <div>
          <h3>You do not have any task</h3>
          <p>Add a task to track work!</p>
        </div>
      )}

      <div className="tasklist-content">
        {taskList.map((item) => (
          <ButtonToolbar
            key={item.task}
            aria-label="Toolbar with button groups"
            className="tasks"
          >
            <Alert
              className={item.completed ? "table-info completed" : "table-info"}
              variant={item.completed ? "success" : item.taskType}
            >
              {item.firstname} {item.lastname} -- {item.task} ---- {item.date}
            </Alert>

            <ButtonGroup className="me-2 w-md-100" aria-label="Second group">
              <Button
                variant="success"
                onClick={() => onHandleComplete(item.task)}
              >
                <FaCheck />
              </Button>
              <Button
                onClick={() => onHandleRemove(item.task)}
                variant="danger"
              >
                <FaTrashAlt />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        ))}
      </div>
    </Container>
  );
};

export default TaskList;
