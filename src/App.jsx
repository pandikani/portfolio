import { useState } from 'react'
import backgroundImage from '../Images/BackgroundImage.jpg'

import './App.css'

function App() {
  

  return (
    <>
      <nav class="navbar">
    <div class="logo">Smart-Collections</div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    <div className="image">
     <img src={backgroundImage}
      alt="" />
    </div>
    </>
  )
}

export default App
