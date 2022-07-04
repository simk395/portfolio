import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <Container>
        <Item>Home</Item>
        <List>
            <Item>Projects</Item>
            <Item>Contributions</Item>
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

const Item = styled.p`
  cursor: pointer;
`

export default Nav