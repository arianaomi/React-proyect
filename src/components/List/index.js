//
import React, { Component } from 'react'
import './List.css'
import {
  Badge,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap'

const elements = [{ text: 'Text 1' }, { text: 'Text 2' }, { text: 'Text 3' }]
//const elements = []
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: true,
    }
    this.handleShowListClick = this.handleShowListClick.bind(this)
  }

  handleShowListClick() {
    const { activeList } = this.state
    this.setState({
      activeList: !activeList,
    })
  }

  render() {
    const { activeList } = this.state

    let UIElements = elements.map(({ text }, index) => {
      const upperText = text.toUpperCase()
      return (
        <ListGroupItem
          onClick={this.handleListItemClick}
          key={index}
          className='List-item'
        >
          {upperText}
        </ListGroupItem>
      )
    })

    if (!UIElements.length) {
      UIElements = (
        <h2>
          No hay <Badge color='danger'>elementos</Badge>
        </h2>
      )
    }

    return (
      <Container className='listSwitch'>
        <Row>
          <Col>{activeList ? <ListGroup>{UIElements}</ListGroup> : null}</Col>
          <Button color='dark' onClick={this.handleShowListClick}>
            {activeList ? 'Hide list' : 'Show List'}
          </Button>
        </Row>
      </Container>
    )
  }
}

export default List
