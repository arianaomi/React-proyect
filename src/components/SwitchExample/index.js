//
import React, { Component } from 'react'
// CSS
import './SwitchExample.css'
//Reactstrap
import { Container, Row, Col, Badge, Button } from 'reactstrap'

class SwitchExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.handleClickSwitch = this.handleClickSwitch.bind(this)
  }

  handleClickSwitch() {
    const { isActive } = this.state

    this.setState({
      isActive: !isActive,
    })
  }

  render() {
    const { isActive } = this.state
    const color = isActive ? 'info' : 'warning'
    return (
      <>
        <Container>
          <Row>
            <Col>
              <p>
                <Badge color={color}>Holi</Badge>
              </p>
              <Button onClick={this.handleClickSwitch}>Switch color</Button>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default SwitchExample
