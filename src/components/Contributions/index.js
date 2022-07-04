import React from 'react'
import styled from 'styled-components'
import Card from '../Shared/Card'
import data from './data.json'

function Contributions() {

    const {contributions} = data;
    const cards = contributions.map( (contributions,i) => 
        <Card key={`${i}`} title={contributions.title} desc={contributions.description} url={contributions.url}/>
    )

    return (
        <Container>
            <Title>Open Source Contributions</Title>
            {cards}
        </Container>
    )
}

const Container = styled.div`
    min-height: 80vh;
`

const Title = styled.h1`
`

export default Contributions