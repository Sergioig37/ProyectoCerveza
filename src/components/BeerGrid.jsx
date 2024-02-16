import React from "react";
import { Cervezas } from './Cervezas';
import { useState } from "react";
import { useEffect } from "react";
export const BeerGrid = () => {

    const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.punkapi.com/v2/beers`
    )
      .then((response) => {
        return response.json();
      })
      .then(( data ) => {
        const cervezas = data.map((cerveza) => ({
          id: cerveza.id,
          name: cerveza.name,
          url: cerveza.image_url,
        }));

        setCervezas(cervezas);
      });
  }, []);

  return <>
        {cervezas.map(({id, nombre, url}) => {
            <Cervezas id={id} nombre={nombre} url={url}/>
        }
        
        )}
  </>;
};
