/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Filho from './Filho'

export default props => {
  const notificarSaidaDoFIlho = lugar => alert(`Liberado para ${lugar}`)
  return (
    <div>
      <Filho notificarSaida={notificarSaidaDoFIlho} />
    </div>
  )
}
