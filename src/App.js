import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Tab, Tabs, Nav, Row, Col} from 'react-bootstrap'
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <Tab.Container defaultActiveKey="home">
        <Row>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-auto">
              <Nav.Link eventKey="projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contributions">Contributions</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <Home/>
            </Tab.Pane>
            <Tab.Pane eventKey="projects">
              projects
            </Tab.Pane>
            <Tab.Pane eventKey="contributions">
              contribtions
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
