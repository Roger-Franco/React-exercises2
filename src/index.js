import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import Primeiro from './componentes/PrimeiroComponente';
import MultiElementos from './componentes/MultiElementos';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <MultiElementos />

  </div>
  , elemento);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello React</h1>
//   </React.StrictMode>
// );