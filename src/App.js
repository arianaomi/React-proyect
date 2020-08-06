import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Container, Row, Col } from 'reactstrap'

//* Components
import Greet from './components/FunctionGreet/index'
import ClassGreet from './components/ClassGreet/index'
import Post from './components/Post/index'
import Clock from './components/Clock'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Greet firstName='Naomi' lastName='Puertos' />
        <ClassGreet firstName='Ariana' lastName='López' />
        <Clock />
      </header>
      <Container>
        <Row>
          <Col xs='12' md='4'>
            <Post
              img={logo}
              title='What is Lorem Ipsum?'
              subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of printing. '
            />
          </Col>
          <Col xs='12' md='4'>
            <Post
              img='https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg'
              title='Why do we use it?'
              subtitle='It is a long established fact that a reader will be distracted '
              text='It is a long established fact that a reader will be distracted It is a long established fact that a reader will be distracted '
            />
          </Col>
          <Col xs='12' md='4'>
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
