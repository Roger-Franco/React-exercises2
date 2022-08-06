/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react'

export default props => {
  const [contador, setContador] = useState(3)
  const [parOuImpar, setParOuImpar] = useState('Ímpar')

  useEffect(() => {
    contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')

  })

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador - 1)}>Dec</button>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
      <h3>{parOuImpar}</h3>
    </div>
  )
}
