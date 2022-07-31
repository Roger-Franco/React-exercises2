import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import FamiliaSilva from './componentes/FamiliaSilva';
import Familia from './componentes/Familia';
import Membro from './componentes/Membro';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <Familia sobrenome="Franco">
      <Membro nome="Thu" />
      <Membro nome="Zoe" />
    </Familia>
    <FamiliaSilva />

  </div>
  , elemento);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello React</h1>
//   </React.StrictMode>
// );