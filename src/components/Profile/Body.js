import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <Container>
        <Title>About</Title>
        <Bio>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
        <Title>Programming Languages</Title>
        <List>
            <Item>JavaScript</Item>
            <Item>C++</Item>
            <Item>Java</Item>
            <Item>Python</Item>
            <Item>Ruby</Item>
        </List>
        <Title>Tools</Title>
        <List>
            <Item>Bootstrap</Item>
            <Item>Express</Item>
            <Item>Git</Item>
            <Item>MongoDB</Item>
            <Item>Postgresql</Item>
            <Item>React</Item>
            <Item>Redux</Item>
            <Item>Ruby on Rails</Item>
            <Item>Sass</Item>
            <Item>Typescript</Item>
        </List>
    </Container>
  )
}

const Container = styled.div`
    text-align:left;
`

const Title = styled.h1`
`

const List = styled.ul`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
`

const Item = styled.li`
`

const Bio = styled.p`
`

export default Body