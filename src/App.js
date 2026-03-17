import React from 'react'

import {About, Header, Footer, Skills, Work, Testimonials} from './containers';
import {Navbar} from './components';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App