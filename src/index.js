import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import Primeiro from './componentes/PrimeiroComponente';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello React</h1>
//   </React.StrictMode>
// );

const elemento = document.getElementById('root');
ReactDOM.render(<Primeiro />, elemento);

