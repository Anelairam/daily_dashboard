import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { DisplayViewSelector } from "./components/DisplayViewSelector";
import { Box, Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DUMMYDATA = [
  {
    title: "Task2",
    priority: 2,
    description: "medium prio",
    status: false,
    id: "2",
  },
  {
    title: "Task1",
    priority: 1,
    description: "low prio",
    status: false,
    id: "1",
  },
  {
    title: "Task3",
    priority: 3,
    description: "high prio",
    status: false,
    id: "3",
  },
];

function App() {
  const [taskData, setTaskData] = useState(DUMMYDATA);
  const [displayView, setDisplayView] = useState("list");
  const [taskForm, setTaskForm] = useState(false);

  const addDataHandler = (data) => {
    setTaskData((prevTasks) => [...prevTasks, data]);
    console.log(taskData);
  };

  const handleButtonClick = () => {
    setTaskForm(!taskForm);
  };
  return (
    <Container>
      {taskForm === false ? (
        <div className="task_btn">
          <Button
            variant="elevated"
            endIcon={<AddIcon />}
            onClick={handleButtonClick}
          >
            New Tasks
          </Button>
        </div>
      ) : (
        <Form
          addDataHandler={addDataHandler}
          handleButtonClick={handleButtonClick}
        />
      )}
      <Box>
        <DisplayViewSelector setDisplayView={setDisplayView} />
        <Display tasks={taskData} view={displayView} />
      </Box>
    </Container>
  );
}

export default App;
