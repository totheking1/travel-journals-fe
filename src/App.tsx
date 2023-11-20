import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import MyAppBar from "./components/Layout/MyAppBar";

function App() {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <MyAppBar />
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
