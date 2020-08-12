import React, { Component } from 'react'

class CurrencyConverter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityMXN: 0,
      quiantityDLS: 0,
    }
  }
  render() {
    const { quantityMXN, quiantityDLS } = this.state
    return (
      <div>
        <form>
          <input type='number' name='' value='' onChange=''></input>
        </form>
      </div>
    )
  }
}

export default CurrencyConverter
