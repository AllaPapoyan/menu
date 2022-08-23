import React from 'react'
import img00 from './image_staf/chili.png'
import img000 from './image_staf/cocktail.png'
import img0000 from './image_staf/seedling.png'
function IconSection() {
    return (
        <section className='section_cordinats'>
            <div className='cordinats' >
                <div className='cordinat'>
                  <div className='iconimg'>  <img src={img00} /></div>
                  <p>Donec sed orci fermentum, convallis lacus id, tempus elit.
                     Sed eu neque accumsan, 
                    porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                    <button className='btn1-1'>Red More</button>
                </div>
                <div className='cordinat'>
                  <div className='iconimg'><img src={img000} /></div>
                  <p>Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.
                     Nam sed suscipit odio. 
                    Morbi in dolor finibus, consequat nisl eget.</p>
                    <button className='btn1-2'>Red More</button>
                </div>
                <div className='cordinat'>
                    <div className='iconimg'><img src={img0000} /></div>
                    <p>Morbi in dolor finibus, consequat nisl eget, pretium nunc. 
                        Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.hgj</p>
                        <button className='btn1-3'>Red More</button>
                </div>
            </div>
        </section>
    )
}

export default IconSection