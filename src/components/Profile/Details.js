import React from 'react'
import Avatar from '../../images/avatar.png'
import Hackerrank from '../../images/hackerrank.svg'
import Github from '../../images/github.svg'
import LeetCode from '../../images/leetcode.png'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
        <Col>
            <Image src={Avatar} title="Simon Kong" alt-text="Picture of me"/>
        </Col>
        <Col>
            <Title>Simon Kong</Title>
            <Text>Software Engineer</Text>
            <Text>Specialize in Web Development and AI</Text>
        </Col>
        <List>
            <Wrapper>
                <Icon src={Github}/>
                <Link href="https://github.com/simk395">GitHub</Link>
            </Wrapper>
            <Wrapper>
                <Icon src={Hackerrank}/>
                <Link href="https://www.hackerrank.com/simonkong">HackerRank</Link>
            </Wrapper>
            <Wrapper>
                <Icon src={LeetCode}/>
                <Link href="https://leetcode.com/simk3695/">LeetCode</Link>
            </Wrapper>
        </List>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-direction: row;
    text-align:left;

    @media (max-width: 384px){
        flex-direction: column;
        align-items: center;
    }
`
const Wrapper = styled(Container)`
    @media (max-width: 384px){
        flex-direction: row;
        justify-content: flex-start;
    }
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
        margin-left: 100px;
    }

    @media (max-width: 384px){
        display:block;
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
    margin-bottom: 5px;
`

const Icon = styled.img`
    height: 20px;
    padding-right: 4px;
`

export default Details