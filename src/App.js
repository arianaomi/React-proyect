import React from 'react'
import './App.css'
//* React Router Dom: ! solo un router como padre, se pueden poner alis con as
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserList from './screens/UserList'
import UserDetail from './screens/UserDetail'
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/users'>
            <UserList />
          </Route>
          <Route exact path='/users/:id'>
            <UserDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
