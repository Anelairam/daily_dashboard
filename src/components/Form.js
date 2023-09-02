import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Unstable_Grid2";

const options = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
];

export const Form = ({ addDataHandler, handleButtonClick }) => {
  const [taskName, setTaskName] = useState("");
  const [taskPrio, setTaskPrio] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  let priorityAlign;

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskPrio = (e) => {
    setTaskPrio(e.target.value);
  };

  const handleTaskDesc = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskPrio === "high") {
      priorityAlign = 3;
    } else if (taskPrio === "medium") {
      priorityAlign = 2;
    } else {
      priorityAlign = 1;
    }
    const formData = {
      title: taskName,
      priority: priorityAlign,
      description: taskDesc,
      id: Math.random().toString,
    };
    addDataHandler(formData);
    setTaskName("");
    setTaskPrio("Low");
    setTaskDesc("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        sx={{
          backgroundColor: "lightgreen",
          maxWidth: "fit-content",
          margin: "0 auto",
        }}
        alignContent={"center"}
      >
        <div>
          <TextField
            required
            id="standard-basic"
            label="Task"
            variant="standard"
            value={taskName}
            onChange={handleTaskName}
          />
        </div>
        <div>
          <TextField
            id="standard-select-options"
            select
            label="Priority"
            defaultValue="Low"
            helperText="Please select tasks priority"
            variant="standard"
            onChange={handleTaskPrio}
            value={taskPrio}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={3}
            value={taskDesc}
            variant="standard"
            onChange={handleTaskDesc}
          />
          <div>
            <Button
              variant="elevated"
              endIcon={<CloseIcon />}
              onClick={handleButtonClick}
            >
              Cancel
            </Button>
            <Button type="Submit" variant="elevated" endIcon={<SendIcon />}>
              Add Task
            </Button>
          </div>
        </div>
      </Grid>
    </form>
  );
};
