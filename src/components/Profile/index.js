import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Body from './Body'

function Profile() {
    return (
        <Container>
            <Details/>
            <Body/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
`

export default Profile