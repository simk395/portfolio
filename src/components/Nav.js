import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <Container>
        <Item>Home</Item>
        <Container>
            <Item>Projects</Item>
            <Item>Contributions</Item>
        </Container>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Item = styled.p`
  cursor: pointer;
  padding-right: 5px;
`

export default Nav