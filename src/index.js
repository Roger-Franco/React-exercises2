import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

// import FamiliaSilva from './componentes/FamiliaSilva';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
import Contador from './componentes/Contador';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <Contador numeroInicial={10} />
    {/* <Familia sobrenome="Franco">
      <Membro nome="Thu" /> */}
    {/* <Membro nome="Zoe" /> */}
    {/* </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <ComponenteClasse valor="Eu sou um compoennte de classe" /> */}

  </div>
  , elemento);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello React</h1>
//   </React.StrictMode>
// );