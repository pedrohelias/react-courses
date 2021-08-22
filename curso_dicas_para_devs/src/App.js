import React, { useState } from "react";
import './App.css';


function App(){
  // let mensagem = "uma mensagem aqui!"
  const [mensagem, setMensagem] = useState(''); //o UseState me da o estado atual da variavel

  function alteramsg(){
    
    setMensagem("nova mensagem");
  }

  return (
    <div>
      
      <div className="container">
        <h1>{mensagem}</h1>
      </div>;
      
      <button onClick={alteramsg}>
        mudar mensagem
      </button>;

    </div>
  );
};


export default App ;