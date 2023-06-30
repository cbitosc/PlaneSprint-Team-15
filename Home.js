import React from 'react'
import Navbar from '../components/Navbar'
import Part from '../components/Part'
import ImageGallery from '../components/imageGallary'
import Card1 from '../components/Card1'
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Part></Part>
      <Card1></Card1>
      <ImageGallery></ImageGallery>
    </div>
  )
}

export default Home