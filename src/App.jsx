import { BeerGrid } from "./components/BeerGrid";
import { BeerFinder } from "./components/BeerFinder";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  
  const [cervezas, setCervezas] = useState([]);
  const [cervezasMostrar, setCervezasMostrar] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const cervezas = response.map((cerveza) => ({
          id: cerveza.id,
          name: cerveza.name,
          url: cerveza.image_url,
          brewed: cerveza.first_brewed,
        }));

        setCervezas(cervezas);
        setCervezasMostrar(cervezas)
      });
  }, []);

  const filtrarCervezas = (beer) => {
    if (beer !== "") {
      setCervezasMostrar(
        cervezas.filter((cerveza) => {
          if (cerveza.name.toLowerCase().indexOf(beer.toLowerCase()) === 0) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
    else{
      setCervezasMostrar(cervezas);
    }
   
  };

  return (
    <>
      <h1>BeerExpertApp</h1>
      <BeerFinder onFiltrarCervezas={filtrarCervezas} />
      <BeerGrid cervezas={cervezasMostrar} />
    </>
  );
}

export default App;
