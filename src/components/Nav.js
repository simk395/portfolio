import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <Container>
        <Item to="/portfolio">Home</Item>
        <List>
            <Item to="/projects">Projects</Item>
            <Item to="/writeups">CTF</Item>
        </List>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
`

const List = styled(Container)`
    width: 175px;
`

const Item = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 500;
`

export default Nav