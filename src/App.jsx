
import { BeerGrid } from './components/BeerGrid'
import { BeerFinder } from './components/BeerFinder'
import { useState } from 'react'

function App() {
 

  const [cerveza, setCerveza] = useState("");

  const findCerveza =  (cervezaEncontrada) => {
    setCerveza(cervezaEncontrada);
  }

  return (
    <>
      <h1>BeerExpertApp</h1>
      <BeerFinder onFindCerveza={findCerveza}/>
      <BeerGrid cerveza={cerveza}/>
    </>
  )
}

export default App
