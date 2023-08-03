import React from 'react'
import styled from 'styled-components'
import Card from '../Shared/Card'
import data from './data.json'

function Writeups() {

    const {writeups} = data;
    const cards = writeups.map( (writeups,i) => 
        <Card key={`${i}`} title={writeups.title} desc={writeups.description} url={writeups.url}/>
    )

    return (
        <Container>
            <Title>CTF Writeups</Title>
            <p>You can find all of my writeups <Anchor href="https://github.com/simk395/CTF-Writeups/tree/main">here</Anchor></p>
            {cards}
        </Container>
    )
}

const Container = styled.div`
    min-height: 80vh;
`

const Title = styled.h1`
`

const Anchor = styled.a`
    color:#87CEEB;
    text-decoration: none;
`

export default Writeups