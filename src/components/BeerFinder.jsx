import React from "react";
import { useState } from "react";

export const BeerFinder = ({ onFiltrarCervezas }) => {

  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    
    setInputValue(target.value);
   onFiltrarCervezas(target.value);
  };

 

  return (
    <>
      
        <input
          type="text"
          value={inputValue}
          placeholder="Buscar Cervezas"
          onChange={onChangeInput}
        ></input>
    
    </>
  );
};
