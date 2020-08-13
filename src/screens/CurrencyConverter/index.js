import React, { Component } from 'react'

class CurrencyConverter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityMXN: 0,
      quantityDLS: 0,
    }
  }
  render() {
    const { quantityMXN, quantityDLS: quantityDLS } = this.state
    return (
      <>
        <div>
          <form>
            <input
              type='number'
              name='quantityMXN'
              value={quantityMXN}
              onChange=''
            ></input>
            <input
              type='number'
              name='quantityDLS'
              value={quantityDLS}
              onChange=''
            ></input>
          </form>
        </div>
      </>
    )
  }
}

export default CurrencyConverter
