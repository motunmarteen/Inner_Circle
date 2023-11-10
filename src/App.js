import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import Faq from './components/Faq'
import WhatsappIcon from './components/WhatsappIcon'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Home/>
      <Main/>
      <Faq/>
      <WhatsappIcon/>
    </div>
  )
}

export default App