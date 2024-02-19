import React from "react";
import { Cerveza } from "./Cerveza";
import Grid from "@mui/material/Grid";

export const BeerGrid = ({ cervezas }) => {
  return (
    <>
      <Grid container spacing={1}>
        {cervezas.map(({ id, name, url, brewed }) => (
          <Cerveza key={id} nombre={name} url={url} brewed={brewed} />
        ))}
      </Grid>
    </>
  );
};
