import React from 'react'
import Avatar from '../../images/avatar.png'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
        <Col>
            <Image src={Avatar} title="Simon Kong" alt-text="Picture of me"></Image>
        </Col>
        <Col>
            <Title>Simon Kong</Title>
            <Text>Software Engineer</Text>
            <Text>Specialize in Web Development and AI</Text>
        </Col>
        <List>
            <Link href="https://github.com/simk395">GitHub</Link>
            <Link href="https://www.hackerrank.com/simonkong">HackerRank</Link>
        </List>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-direction: row;
    text-align:left;
`

const Image = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 1rem;
`

const Col = styled.div`
    @media (max-width: 768px){
        
    }
`

const List = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:auto;

    @media (max-width: 768px){
        margin: 0;
    }
`

const Title = styled.h1`
    font-size: 250%;
    margin: 0;
`

const Text = styled.p`
    margin:0;
`

const Link = styled.a.attrs({
    target: "_blank"
})`
    color:#87ceeb;
    text-decoration: none;
`


export default Details