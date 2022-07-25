import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Service from './components/services/Service';
// import Testimonial from './components/testimonials/Testimonial';

const App = () => {
  return (
    <>
       <Header/> 
       <Nav/>
       <About/>
       <Experience/>
       <Service/>
       {/* <Testimonial/> */}
       <Contact/>
       <Footer/>
    </>
  )
}

export default App;
