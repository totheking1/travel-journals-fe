import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
// import {Paper} from "@mui/material";
import MyAppBar from "./components/Layout/MyAppBar";

function App() {
  return (
    <Grid container>
      {/* <Grid */}
      {/*     xs={12} sm={12} md={12} xl={12} */}
      {/*     sx={{ display: "flex", justifyContent: 'center'}} */}
      {/* > */}
      <MyAppBar />
      <Outlet />
      {/* <Grid container sx={{ width: "100%"}}> */}
      {/*     <Grid xs={8} sm={8} md={8} xl={8}> */}
      {/*         <Paper sx={{ width: "100%", marginTop: "1rem", padding: "1rem"}}> */}
      {/*             <Outlet /> */}
      {/*         </Paper> */}
      {/*     </Grid> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
}

export default App;
