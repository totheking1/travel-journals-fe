import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";

export default function CreateTravelJournal() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <TextField required label="Required" defaultValue="Hello World" />
    </Grid>
  );
}
