import React from "react";
import "./TaskList.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import {
  Container,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Badge,
  Alert,
} from "react-bootstrap";

const TaskList = ({ taskList }) => {
  return (
    <Container className="p-5">
      {taskList.length > 0 ? (
        <h3>
          Your ToDo Tasks! <Badge bg="primary">{taskList.length}</Badge>
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
            <Alert className="table-info">
              {item.firstname} {item.lastname} -- {item.task}
            </Alert>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button>
                <FaEdit />
              </Button>
              <Button variant="danger">
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
