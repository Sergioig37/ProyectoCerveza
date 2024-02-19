import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Cerveza({nombre, url, brewed}) {

  
    
  return (
    <>
      <div style={{margin: "20px"}}>
        <div>
          <img src={url} alt="" style={{maxHeight: "200px", maxWidth: "200px"}}/>
        </div>
        <div>
          <h2>{nombre}</h2>
          <p>Brewed in { brewed }</p>
        </div>
      </div>
    </>
 
  );
}