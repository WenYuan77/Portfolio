import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import bgImg from './assets/chinese-style.jpg';

const App = () => {
  return (<>
    <div className="bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${bgImg})`}}>
      <Navbar/>
      <Hero/>
    </div>
      <Skills/>
      <About/>
      <Projects/>
  </>
 
  )
}

export default App