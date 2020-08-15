import React from 'react'
//CSS
import './Menu.css'

//RRD
import { Link } from 'react-router-dom'

function Menu({ currentPath }) {
  return (
    <nav>
      <ul>
        <li>
          {currentPath === 'home' ? (
            'Home'
          ) : (
            <Link className='link' to='/'>
              Home
            </Link>
          )}
        </li>
        <li>
          {currentPath === 'notesBlog' ? (
            'Blog de notas'
          ) : (
            <Link className='link' to='/notesBlog'>
              Blog de notas
            </Link>
          )}
        </li>
        <li>
          {currentPath === 'currencyConverter' ? (
            'Conversor de divisas'
          ) : (
            <Link className='link' to='/currencyConverter'>
              Conversor de divisas
            </Link>
          )}
        </li>
        <li>
          {currentPath === 'hooks' ? (
            'Hooks'
          ) : (
            <Link className='link' to='/hooks'>
              Hooks
            </Link>
          )}
        </li>
        <li>
          {currentPath === 'users' ? (
            'Users'
          ) : (
            <Link className='link' to='/users'>
              Users
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Menu
