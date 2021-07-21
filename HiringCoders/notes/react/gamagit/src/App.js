import React, { useState } from 'react';

function App(props) {
  const [usuario, setUsuario] = useState('Isa')
  return (
    <>
      <h1>{props.title}</h1>
      <p>{ usuario }</p>
      <input name="usuario" id="usuario" className="usuario" placeholder="usuario" />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;

