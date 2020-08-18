import React, { useState, useEffect } from 'react'
//Services
import { getUsers } from '../../services'
//RRD
import { Link, useRouteMatch } from 'react-router-dom'

function UserList() {
  const { url } = useRouteMatch()
  console.log(url)
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(data => {
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

  const parsedUsers = users.map(({ firstName, lastName, key }) => (
    <li key={key}>
      <Link to={`${url}/${key}`}>
        {firstName} {lastName}
      </Link>
    </li>
  ))
  return (
    <>
      <h1>user list</h1>
      <ul>{parsedUsers}</ul>
    </>
  )
}

export default UserList
