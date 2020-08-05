//Componente como clase
import React, { Component } from 'react'

class ClassGreet extends Component {
  //! Render es igual que el return de componente como función
  //? En las clases todo depende del contexto y el las funnciones de los props
  render() {
    return (
      <p>
        Hola {this.props.firstName} {this.props.lastName}
      </p>
    )
  }
}

export default ClassGreet
