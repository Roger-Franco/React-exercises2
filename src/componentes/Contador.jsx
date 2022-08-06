import React, { Component } from 'react'

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial
    // numero: 0
  }
  // state = {
  //   numero: this.props.numero
  // }

  maisUm = () => {
    // this.state.numero = this.state.numero + 1 // não funciona
    this.setState({ numero: this.state.numero + 1 }) // ou pode ser abaixo
    // this.alterarNumero(1)
    // console.log(this);
  }

  menosUm = () => {
    // this.setState({ numero: this.state.numero - 1 })
    this.alterarNumero(-1)
  }

  alterarNumero = (diferenca) => {
    // this.state.numero = this.state.numero + 1
    this.setState({ numero: this.state.numero + diferenca })
  }
  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <button onClick={() => this.alterarNumero(10)}>Inc10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
      </div>
    )
  }
}

// solução 1 - Função Bind
// constructor(props) {
//   super(props)
//   this.maisUm = this.maisUm.bind(this)
// }

// solução 2 - Função Arrow (onClick)
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 3 - Função Arrow
// maisUm = () => {
//  // this.props.numero++
  // console.log(this);
// }