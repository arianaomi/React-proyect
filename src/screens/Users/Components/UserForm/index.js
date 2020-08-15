import React, { useState } from 'react'
//Components
import Input from '../../../../components/Input'
//CSS
function UserForm({ callback }) {
  const [firstName, setFistName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)

  const handleInputChange = (name, value) => {
    if (name === 'firstName') {
      setFistName(value)
    } else if (name === 'lastName') {
      setLastName(value)
    } else {
      setAge(value)
    }

    console.log('name', name)
  }
  const handleSubmit = event => {
    event.preventDefault()

    callback(firstName, lastName, age)
    // setName({ firstName: '', lastName: '' })
    // setAge(0)
  }

  console.log(firstName, lastName)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        First name:
        <Input
          value={firstName}
          name='firstName'
          callback={handleInputChange}
        />
        Last name:
        <Input value={lastName} name='lastName' callback={handleInputChange} />
        Age:
        <Input value={age} name='age' callback={handleInputChange} />
        <button> Create user</button>
      </form>
    </div>
  )
}

export default UserForm
