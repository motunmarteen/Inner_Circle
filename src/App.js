import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YouTube from './components/Youtube'
import Features from './components/Features'
import Offerings from './components/Offerings'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <YouTube/>
      <Features/>
      <Offerings/>
    </div>
  )
}

export default App