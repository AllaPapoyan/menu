import React from 'react'
import Buttons from './Buttons'
import './Home.css'
import HomeLastSection from './HomeLastSection'
import Walcome from './Walcome'

function Home() {

  
  return (
    <div className='home'>
        <Walcome />
        <Buttons /> 
        <HomeLastSection />
    </div>
  )
}

export default Home