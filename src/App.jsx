import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Intro from './components/Intro/intro.jsx'
import About from './components/About/about.jsx'
import Portfolio from './components/Portfolio/portfolio.jsx'
import Technologies from './components/Technologies/technologies.jsx'
import Contact from './components/Contact/contact.jsx'
import './i18n.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
    </div>
  )
}

export default App
