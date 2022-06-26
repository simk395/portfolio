import React, { Component } from 'react'
import Avatar from '../images/avatar.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export class Profile extends Component {
  render() {
    return (
        <Container>
            <Row className="text-md-start text-center">
                <Col md={3} className="p-0">
                    <img id="avatar-img" src={Avatar}></img>
                </Col>
                <Col md>
                    <Row>
                        <h1 id="title" className="p-0 m-0">
                            Simon Kong
                        </h1>
                    </Row>
                    <Row>
                        <p className="p-0 m-0">Software Engineer</p>
                        <p className="p-0 m-0">Specialize in Web Development and AI</p>
                    </Row>         
                </Col>
                <Col>
                    <Stack gap={1}>
                        <a href="#">First item</a>
                        <div>Second item</div>
                        <div>Third item</div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Profile