import React from 'react'
import iii from './image_staf/about-06.jpg'
function AboutEnd() {
  return (
    <section className='last-section'>
        <div className='l-cont'>
            <div className='lastimg'><img src={iii}/></div>
            <div className='l-text'>
                <h4>Maecenas nulla neque</h4>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
                     Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                     <div className='l-button'><button className='btn-l' >Read More</button></div>
            </div>
        </div>
    </section>
  )
}

export default AboutEnd