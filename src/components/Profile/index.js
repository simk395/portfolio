import React, { Component } from 'react'
import styled from 'styled-components'
import Details from './Details'
import Body from './Body'

export class Profile extends Component {
  render() {
    return (
        <Container>
            <Details/>
            <Body/>
        </Container>
    )
  }
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
`

export default Profile