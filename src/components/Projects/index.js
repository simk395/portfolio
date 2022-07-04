import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import data from './data.json'


function Projects() {

    const {projects} = data;
    const cards = projects.map( (project,i) => 
        <Card key={`${i}`} title={project.title} desc={project.description} url={project.url}/>
    )
    return (
        <Container>
            <Title>Projects</Title>
            {cards}
        </Container>
    )
}

const Container = styled.div`
`

const Title = styled.h1`
`

export default Projects