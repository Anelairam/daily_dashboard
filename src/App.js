import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { DisplayViewSelector } from "./components/DisplayViewSelector";
import { Container } from "@mui/material";

const DUMMYDATA = [
  { title: "Task2", priority: 2, description: "medium prio", id: "2" },
  { title: "Task1", priority: 1, description: "low prio", id: "1" },
  { title: "Task3", priority: 3, description: "high prio", id: "3" },
];

function App() {
  const [taskData, setTaskData] = useState(DUMMYDATA);
  const [displayView, setDisplayView] = useState("list");

  const addDataHandler = (data) => {
    setTaskData((prevTasks) => [...prevTasks, data]);
    console.log(taskData);
  };

  return (
    <Container sx={{backgroundColor: 'lightpink'}}>
      <Form addDataHandler={addDataHandler} />
      <DisplayViewSelector setDisplayView={setDisplayView} />
      <Display tasks={taskData} view={displayView} />
    </Container>
  );
}

export default App;
