import React from "react";
import { useState } from "react";

export const BeerFinder = ({ onFindCerveza }) => {

  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
    onFindCerveza(inputValue);
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
