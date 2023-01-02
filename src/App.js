import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Portfolio } from './components/portfolio/Portfolio'
import { About } from './components/about/About'
import { Projects } from './components/myprojects/Projects'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App