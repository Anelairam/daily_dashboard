import { Grid, Paper } from "@mui/material";
import React from "react";

export const Display = ({ tasks, view }) => {
  const highPrio = tasks.filter((task) => task.priority === 3);
  const mediumPrio = tasks.filter((task) => task.priority === 2);
  const lowPrio = tasks.filter((task) => task.priority === 1);

  return (
    <>
      {tasks.length !== 0 ? (
        <div>
          {view === "list" ? (
            <div>
              {tasks.map((task) => {
                return (
                  <Paper key={task.id} elevation={1} sx={{width: '15%'}}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </Paper>
                );
              })}
            </div>
          ) : view === "table" ? (
            <Grid container columnSpacing={8} sx={{backgroundColor: 'lightgreen'}}>
              <Grid item>
                {highPrio.map((task) => {
                  return (
                    <Paper key={task.id} elevation={1}>
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                    </Paper>
                  );
                })}
              </Grid>
              <Grid item>
                {mediumPrio.map((task) => {
                  return (
                    <Paper key={task.id} elevation={1}>
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                    </Paper>
                  );
                })}
              </Grid>
              <Grid item>
                {lowPrio.map((task) => {
                  return (
                    <Paper key={task.id} elevation={1}>
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                    </Paper>
                  );
                })}
              </Grid>
            </Grid>
          ) : view === "highPriority" ? (
            <div>
              <p>High view</p>
              {highPrio.map((task) => {
                return (
                  <Paper key={task.id} elevation={1}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </Paper>
                );
              })}
            </div>
          ) : view === "mediumPriority" ? (
            <div>
              <p>Medium view</p>
              {mediumPrio.map((task) => {
                return (
                  <Paper key={task.id} elevation={1}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </Paper>
                );
              })}
            </div>
          ) : (
            <div>
              <p>Low view</p>
              {lowPrio.map((task) => {
                return (
                  <Paper key={task.id} elevation={1}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </Paper>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <h1>No available tasks for the day</h1>
      )}
    </>
  );
};
