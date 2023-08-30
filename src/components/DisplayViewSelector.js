import React, { useState } from "react";

export const DisplayViewSelector = ({setDisplayView}) => {

    const handleDisplayView = (e) => {
      setDisplayView(e.target.value)
    }

  return (
    <div>
      <label for="view">Tasks view :</label>
      <select
        id="view"
        name="view"
        onChange={handleDisplayView}
      >
        <option value="list">List</option>
        <option value="table">Table</option>

        <option value="highPriotiry">High Priority</option>
        <option value="mediumPriotiry">MEdium Priority</option>
        <option value="lowPriotiry">Low Priority</option>
      </select>
    </div>
  );
};
