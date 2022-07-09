import './App.css';
import styled from 'styled-components'
import {Nav, Profile, Footer, Projects, Contributions} from './components'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Container>
      <Nav/>
      <Routes>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contributions' element={<Contributions/>} />
        <Route path="/portfolio" element={<Profile/>} />
      </Routes>
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
    margin: 0 4rem;
    padding: 0 8rem;
  }

  @media (max-width: 480px){
    width: 450px;
  }
  
  @media (max-width: 640px){
      margin: 0 2rem;
      padding: 0 4rem;
    }

  @media (max-width: 384px){
    width: 365px
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






export default App;
