import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <Container>
        <Title>About</Title>
        <Bio>
            Hello, I am a hobbyist programmer going professional. I have been programming for 7+ years as an amateur. Most of the programs I have created
            are bots/scripts to automate mine or someone elses daily life. Some of these programs are used in professional work by people I know. 
            I am most proficient in JavaScript and Python but, I do use Java and C++ when necessary. Love working
            on challenging problems/puzzles and helping others with programming.
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
    overflow-wrap: anywhere;

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