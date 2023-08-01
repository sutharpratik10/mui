import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Blog, Feature, Footer, Header, Details, Home } from './Container'
import {CTA, Brand, Navbar} from './Components'

const App = () => {
  return ( 
    <>
      <div className='App'>
        <div classneame = 'header'>
          <Navbar/>  
        </div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Brand" element={<Brand/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Feature" element={<Feature/>} />
          <Route path="/CTA" element={<CTA/>} />
        </Routes>
      
        <div>
          <Footer/>
        </div>    
      </div>
    </>
  )
}

export default App