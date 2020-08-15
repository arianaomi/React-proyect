import React from 'react'
import './App.css'
//* React Router Dom: ! solo un router como padre, se pueden poner alis con as
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import CurrencyConverter from './screens/CurrencyConvert'
import Hooks from './screens/Hooks'

//Components
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact={true}>
            <Menu currentPath='home' />
          </Route>
          <Route path='/currencyConverter'>
            <Menu currentPath='currencyConverter' />
            <CurrencyConverter />
          </Route>
          <Route path='/hooks'>
            <Menu currentPath='hooks' />
            <Hooks />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
