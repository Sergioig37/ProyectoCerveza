import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export function Cerveza({ nombre, url, brewed }) {
  return (
    <>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia component="img" alt="green iguana" image={url} sx={{ maxHeight: 150 }}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              First brewed in {brewed}
            </Typography>
          </CardContent>
        </Card>
    </>
  );
}
