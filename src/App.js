import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Container, Row, Col } from 'reactstrap'

//* Components
import Greet from './components/FunctionGreet/index'
import ClassGreet from './components/ClassGreet/index'
import Post from './components/Post/index'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Greet firstName='Naomi' lastName='Puertos' />
        <ClassGreet firstName='Ariana' lastName='López' />
      </header>
      <Container>
        <Row>
          <Col>
            <Post
              img={logo}
              title='What is Lorem Ipsum?'
              subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            />
          </Col>
          <Col xs='12' sm='6'>
            <Post
              img='https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg'
              title='Why do we use it?'
              subtitle='It is a long established fact that a reader will be distracted '
              text='It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted '
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
