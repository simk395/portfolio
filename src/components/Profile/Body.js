import React from 'react'
import styled from 'styled-components'
import data from './data.json'

function Body() {
    const {lang, tools} = data;
    const langItems = lang.map( language => 
        <Item>{language}</Item>
    )

    const toolsItems = tools.map( tool => 
    <Item>{tool}</Item>
    )
  return (
    <Container>
        <Title>About</Title>
        <Bio>
            I am a video game software analyzer that also inspects malware. I primarily use my understanding of x86, C++, and Win32 API to disassemble software for entertainment. I have familiarity with web development using the MERN and PERN stack.
            I also have familiarity with computer vision, search engine algorithms, and operating systems. 
        </Bio>
        <Title>Programming Languages</Title>
        <List>
            {langItems}
        </List>
        <Title>Tools</Title>
        <List>
            {toolsItems}
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