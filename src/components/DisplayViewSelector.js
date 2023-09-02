import { MenuItem, TextField } from "@mui/material";
import React from "react";

const options = [
  {
    value: "list",
    label: "List",
  },
  {
    value: "table",
    label: "Table",
  },
  {
    value: "highPriority",
    label: "High Priority",
  },
  {
    value: "mediumPriority",
    label: "Medium Priority",
  },
  {
    value: "lowPriority",
    label: "Low Priority",
  }
];

export const DisplayViewSelector = ({ setDisplayView }) => {
  const handleDisplayView = (e) => {
    setDisplayView(e.target.value);
  };

  return (
    <>
      <TextField
        id="standard-select-options"
        select
        label="View"
        helperText="Please select tasks priority"
        variant="standard"
        onChange={handleDisplayView}
        value="List"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};
