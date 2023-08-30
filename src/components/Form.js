import React, { useState } from "react";

export const Form = ({ addDataHandler }) => {
  const [taskName, setTaskName] = useState("");
  const [taskPrio, setTaskPrio] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  let priorityAlign;

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskPrio = (e) => {
    setTaskPrio(e.target.value);
    if (taskPrio === "High"){
      priorityAlign = 3
    } else if (taskPrio === "Medium"){
      priorityAlign = 2
    } else {
      priorityAlign = 1
    }
  };

  const handleTaskDesc = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = 
      {
        title: taskName,
        priority: priorityAlign,
        description: taskDesc,
        id: Math.random().toString,
      }

    addDataHandler(formData);
    setTaskName("");
    setTaskPrio("Low");
    setTaskDesc("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="taskName">Enter Task :</label>
      <input
        required
        type="text"
        id="taskName"
        name="taskName"
        value={taskName}
        onChange={handleTaskName}
      />
      <label for="prio">Task's priority :</label>
      <select
        id="prio"
        name="prio"
        onChange={handleTaskPrio}
        defaultValue={taskPrio}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label for="taskDesc">Description :</label>
      <input
        type="textarea"
        id="taskDesc"
        name="taskDesc"
        value={taskDesc}
        onChange={handleTaskDesc}
      />
      <button type="Submit">Add Task</button>
    </form>
  );
};
