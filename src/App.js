import './App.css';
import styled from 'styled-components'
import {Nav, Profile, Footer} from './components'

function App() {
  return (
    <Container className="App">
      <Nav/>
      <Profile/>
      <Footer/>
    </Container>
  );
}

console.log(window.innerWidth);

const Container = styled.div`
  text-align: center;
  width: 600px;
  min-height:100vh;
  margin: 0 5rem;
  padding: 0 10rem;

  @media (max-width: 960px){
    margin: 0;
    padding: 0;
  }
  
`

// @media (max-width: 768px){
//   margin: 0 3rem;
//   padding: 0 6rem;
// }

// @media (max-width: 640px){
//   margin: 0 2rem;
//   padding: 0 4rem;
// }

// @media (max-width: 480px){
//   margin: 0 1rem;
//   padding: 0 2rem;
// }

// @media (max-width: 384px){
//   margin: 0;
//   padding: 0;
// }


export default App;
