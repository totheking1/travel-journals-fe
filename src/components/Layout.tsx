import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MyAppBar from "./MyAppBar";

export default function Layout() {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <MyAppBar />
      </Grid>
    </Grid>
  );
}
