import React from "react"
import Header from "./components/Header"
import {Container} from 'react-bootstrap'
import Footer from "./components/Footer"

const App =() => {
  return (
      <>
    <Header/>
    <main>
    <Container>
   
    <h1>Welcome to my Shop</h1>

    </Container>
       
    </main>
    <Footer/>
      </>
 
   
  );
}

export default App;
