import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`http://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  return (
    <>
      <h1>{props.title}</h1>
      <p>{ usuario }</p>
      <input name="usuario" className="usuario" placeholder="usuario" value={usuario} onChange={ e=> setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;

