import React, { useState, useEffect } from 'react'
//Custom components
import UserForm from './Components/UserForm'
//CSS
import './Users.css'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://reactsessions-ac545.firebaseio.com/users.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let parsedUsers = []
        for (let key in data) {
          let user = data[key]
          user['key'] = key
          parsedUsers.push(user)
        }
        if (parsedUsers) {
          setUsers(parsedUsers)
        }
      })
  }, [])

  const handleForm = (firstName, lastName, age) => {
    fetch('https://reactsessions-ac545.firebaseio.com/users.json', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        firstName,
        lastName,
        age,
      }),
    })
      .then(response => response.json)
      .then(({ name }) => {
        const newUsers = [...users, { firstName, lastName, key: name }]
        setUsers(newUsers)
      })
  }

  const UIUsers = users.map(({ firstName, lastName }, index) => (
    <li className='liUsers' key={index}>
      {firstName} {lastName}
    </li>
  ))

  return (
    <>
      <h1>Hi users ✌🏽</h1>
      {UIUsers.length ? null : <p>No hay koders</p>}
      <ul className='koders'>{UIUsers}</ul>
      <UserForm callback={handleForm} />
    </>
  )
}
export default Users
