import React from 'react'
import stafImg1 from './image_staf/about-01.jpg' 
import stafImg2 from './image_staf/about-02.jpg' 
import stafImg3 from './image_staf/about-03.jpg' 
import stafImg4 from './image_staf/about-04.jpg' 
import icon1 from './image_staf/icons8-f.png'
import icon2 from './image_staf/icons8-t.png'
import icon3 from './image_staf/icons8-i.png'
function Staff() {
  return (
    <section className='staf-cont'>
        <div className='staf'>
        <div className='person'>
            <div className='nkar'><img src={stafImg1}></img></div>
            <div className='person-data'>
                <h3 className='person-name'>Jennifer Soft</h3>
                <p className='person-title'>Founder and CEO</p>
                <p className='person-about'>Vivamus cursus leo nec sem feugiat sagittis.
                 Duis ut feugiat odio, sit amet accumsan odio.</p>
                 <div className='icons'>
                 <div className='icon'><img className='nk-i' src={icon1}/></div>
                 <div className='icon'><img src={icon2}/></div>
                 <div className='icon'><img src={icon3}/></div>
                 </div>
            </div>
        </div>

        <div className='person'>
            <div className='nkar'><img src={stafImg2}></img></div>
            <div className='person-data'>
                <h3 className='person-name'>Jennifer Soft</h3>
                <p className='person-title'>Founder and CEO</p>
                <p className='person-about'>Vivamus cursus leo nec sem feugiat sagittis.
                 Duis ut feugiat odio, sit amet accumsan odio.</p>
                 <div className='icons'>
                 <div className='icon'><img className='nk-i' src={icon1}/></div>
                 <div className='icon'><img src={icon2}/></div>
                 <div className='icon'><img src={icon3}/></div>
                 </div>

            </div>
        </div>
        <div className='person'>
            <div className='nkar'><img src={stafImg3}></img></div>
            <div className='person-data'>
                <h3 className='person-name'>Jennifer Soft</h3>
                <p className='person-title'>Founder and CEO</p>
                <p className='person-about'>Vivamus cursus leo nec sem feugiat sagittis.
                 Duis ut feugiat odio, sit amet accumsan odio.</p>
                 <div className='icons'>
                 <div className='icon'><img className='nk-i' src={icon1}/></div>
                 <div className='icon'><img src={icon2}/></div>
                 <div className='icon'><img src={icon3}/></div>
                 </div>
            </div>
        </div>
        <div className='person'>
            <div className='nkar'><img src={stafImg4}></img></div>
            <div className='person-data'>
                <h3 className='person-name'>Jennifer Soft</h3>
                <p className='person-title'>Founder and CEO</p>
                <p className='person-about'>Vivamus cursus leo nec sem feugiat sagittis.
                 Duis ut feugiat odio, sit amet accumsan odio.</p>
                 <div className='icons'>
                 <div className='icon'><img className='nk-i' src={icon1}/></div>
                 <div className='icon'><img src={icon2}/></div>
                 <div className='icon'><img src={icon3}/></div>
                 </div>
            </div>
        </div>

        

        </div>

    </section>
  )
}

export default Staff