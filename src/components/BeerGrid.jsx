import React from "react";
import { Cervezas } from './Cervezas';
import { useState } from "react";
import { useEffect } from "react";
export const BeerGrid = ({cerveza}) => {

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
          brewed: cerveza.first_brewed
        }));

        setCervezas(cervezas);
      });
  }, []);

  return <>

        {cervezas.map(({id, name, url, brewed}) => (
            <Cervezas key={id} nombre={name} url={url} brewed={brewed}/>
        )
        
        )}
  </>;
};
