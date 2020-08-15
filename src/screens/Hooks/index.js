import React, { useState } from 'react'
import './Hooks.css'

function Hooks() {
  const [greet, setGreet] = useState('Hola mundo 🌎')
  const [activeButton, setActivebutton] = useState(false)
  const handleClick = () => setActivebutton(!activeButton)

  //useState
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleLess = () => {
    count > 0 ? setCount(count - 1) : setCount(count)
  }

  let color = activeButton ? 'ON' : 'OFF'
  return (
    <>
      <div>
        <h1>{greet}</h1>
      </div>
      <div>
        <button className={color} onClick={handleClick}>
          {activeButton ? 'ON' : 'OFF'}
        </button>
        <h3>{count}</h3>
        <button className='button-currency' onClick={handleAdd}>
          +1
        </button>
        <button className='button-currency' onClick={handleLess}>
          {' '}
          -1
        </button>
      </div>
    </>
  )
}

export default Hooks
