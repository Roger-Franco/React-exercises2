import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import Primeiro from './componentes/PrimeiroComponente';
import { CompA, CompB as B } from './componentes/DoisComponentes';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <CompA valor="Olá, eu sou A" />
    <B valor="Olá, eu sou B" />

  </div>
  , elemento);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello React</h1>
//   </React.StrictMode>
// );