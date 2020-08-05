import React from 'react'

//CSS Reacstrap
import { Badge } from 'reactstrap'

function Greet({ firstName, lastName }) {
  //? En las clases todo depende del contexto y el las funnciones de los props
  return (
    <div>
      <p>
        Hola {firstName} {lastName} {''}{' '}
        <Badge color='info'>Functional Component</Badge>
      </p>
    </div>
  )
}
export default Greet
