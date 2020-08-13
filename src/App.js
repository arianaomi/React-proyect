import React from 'react'
import './App.css'
//React Router Dom
//! solo un router como padre
//* un alias con as
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Screens
import NotesBlog from './screens/NotesBlog'
import CurrencyConverter from './screens/CurrencyConverter'
import Users from './screens/Users'
//Components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar
          link1={<Link to='/notesBlog'>Blog de notas</Link>}
          link2={<Link to='/currencyConverter'>Conversor de divisas</Link>}
          link3={<Link to='/users'>Conversor de divisas</Link>}
        />
        <Switch>
          <Route path='/' exact={true}></Route>
          <Route path='/notesBlog'>
            <NotesBlog />
          </Route>
          <Route path='/currencyConverter'>
            <CurrencyConverter />
          </Route>
          <Router path='/'>
            <Users />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

export default App
