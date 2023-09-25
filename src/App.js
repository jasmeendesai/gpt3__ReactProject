import React from 'react'

import './App.css'

import {Brand, Navbar, CTA} from './components'
import {Blog, Footer, Features, Possibility, WhatGpt3, Header} from './containers'



function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
