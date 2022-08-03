import React from 'react'

const aprovados = ['Paula', 'João', 'Pedro', 'Julia']

const ComponenteComFuncao = props => {

  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
  }
  return (
    <ul>
      {gerarItens(aprovados)}
    </ul>
  )
}

export default ComponenteComFuncao
