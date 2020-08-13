import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    //this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { link1, link2, link3 } = this.props
    return (
      <>
        <nav className='nav'>
          <ul className='enlaces'>
            <li>{link1}</li>
            <li>{link2}</li>
            <li>{link3}</li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Navbar
