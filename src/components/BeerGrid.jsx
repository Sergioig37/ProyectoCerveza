import React from "react";
import { Cerveza } from "./Cerveza";
import { useState } from "react";
import { useEffect } from "react";

export const BeerGrid = ({ cervezas }) => {

    

  return (
    <>
      <div style={{ display: "flex" }}>
        {cervezas.map(({ id, name, url, brewed }) => (
          <Cerveza key={id} nombre={name} url={url} brewed={brewed} />
        ))}
      </div>
    </>
  );
};
