import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

export default function Example() {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Button variant="contained">Hello world</Button>
      </Grid>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Button variant="contained" href="/">
          홈으로
        </Button>
      </Grid>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Button variant="contained">Hello world</Button>
      </Grid>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Button variant="contained">Hello world</Button>
      </Grid>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Button variant="contained">Hello world</Button>
      </Grid>
    </Grid>
  );
}
