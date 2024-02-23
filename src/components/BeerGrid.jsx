import React from "react";
import { Cerveza } from "./Cerveza";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";


export const BeerGrid = ({ cervezas }) => {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {cervezas.map(({ id, name, url, brewed }) => (
            <Grid item xs={6} key={id}>
              <Cerveza key={id} nombre={name} url={url} brewed={brewed} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
