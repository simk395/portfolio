import React from 'react'
import styled from 'styled-components'

function Card(props) {
  return (
    <Container>
        <Title href={props.url}>{props.title}</Title>
        <Description>{props.desc}</Description>
    </Container>
  )
}

const Container = styled.div`
    text-align: left;
`

const Title = styled.a.attrs({
  target: "_blank"
})`
    text-decoration: none;
    color: #87ceeb;
`

const Description = styled.p`
`

export default Card