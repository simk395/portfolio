import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <Text>Created by <Link href="mailto: skongnyc@gmail.com">Simon Kong</Link></Text>
    </Container>
  )
}

const Container = styled.footer`

`

const Text = styled.p`
`

const Link = styled.a`
    color: #87ceeb;
    text-decoration: none;
`

export default Footer