import React, { Component } from 'react'
import Avatar from '../images/avatar.png'
import styled from 'styled-components'

export class Profile extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={Avatar}></img>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
  }
}

const Container = styled.div`
`

const Row = styled.div`
`

const Col = styled.div`
`

export default Profile