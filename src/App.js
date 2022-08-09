import React from 'react';
import { Faq } from './components/faq/Faq';
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { Testimonial } from './components/testimonial/Testimonial';



function App() {

  return(  
    <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <Faq title="Stay productive, wherever you are"/>
    <Testimonial/>
    <Form/>
    <Footer/>
  </div>

  )

}

export default App;
