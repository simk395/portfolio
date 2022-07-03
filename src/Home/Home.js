import React, { Component } from 'react'
import Profile from './Profile'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Profile/>
        </Row>
      </Container>
    )
  }
}

export default Home