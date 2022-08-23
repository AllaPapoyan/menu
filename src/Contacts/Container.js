import React, { useState } from 'react'
import img99 from "./contImg/telephone-call.png"
import img999 from "./contImg/email.png"
import icon9 from './contImg/icons8-f.png'
import icon8 from './contImg/icons8-t.png'
import icon7 from './contImg/icons8-i.png'
function Container() {

    let [count, setCount] = useState({
        name1: "",
        email: "",
        textarea: "",

    })

    function f(e) {
        e.preventDefault()

        console.log(count);
    }
    return (
        <section className='container'>
            <div className='component'>
                <div className='registration'>
                    <form className='form-grup' onSubmit={f}>
                        <input type="text" className='form-name' onChange={(e) => {
                            setCount({ ...count, name1: e.target })
                        }}
                        ></input>
                        <input type="mail" className='form-email' onChange={(e) => {
                            setCount({ ...count, email: e.target })
                        }}></input>
                        <input type="textarea" className='form-coment' onChange={(e) => {
                            setCount({ ...count, textarea: e.target })
                        }}></input>

                        <button className='btn4' > Send</button>
                    </form>
                </div>
                <div className='address'>
                    <h2>Our Address</h2>
                    <p className='address-data'>180 Orci varius natoque penatibus et magnis dis parturient montes,
                        
                         nascetur ridiculus mus 10550</p>
                   <div className='phone'> <div><img src={img99}/></div><p>080-090-0110</p></div>
                   <div className='mail'> <div><img src={img999}/></div><p>info@company.com</p></div>
                  

                   <div className='icons'>
                 <div className='icon'><img className='nk-i' src={icon9}/></div>
                 <div className='icon'><img src={icon8}/></div>
                 <div className='icon'><img src={icon7}/></div>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Container