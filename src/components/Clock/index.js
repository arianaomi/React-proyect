import React, { Component } from 'react'
import { Badge } from 'reactstrap'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: 'danger',
      counter: 1,
      isActive: false,
    }
    this.handleClick = this.handleClick.bind(this) //* bindig del metodo
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      }) //! funcion asincrona
    }, 1000)

    setTimeout(() => {
      this.setState({
        color: 'info',
      })
    }, 3000)
  }

  handleClick() {
    console.log('Meclickearon')
    let { isActive } = this.state
    isActive = isActive ? false : true
    this.setState({
      isActive,
    })
    console.log(isActive)
  }

  render() {
    let color = this.state.isActive ? 'warning' : 'info'
    return (
      <>
        <h1>
          <Badge color={color}>{this.state.date}</Badge>
        </h1>
        <button onClick={this.handleClick}>Click me!</button>
      </>
    )
  }
}

export default Clock
