import React, { useState } from 'react'

function Detals(props) {


let [click, setClick]=useState(false)



    return (
        <section className='last-sectin'>
        <div className='last-buttons'>
            <button className='btn-last' onClick={()=>{
                setClick(!click)
            }} >{props.btnname}</button>
            <div>
                { click ?
                <p className='n'>
                    {props.text}
                </p>
                :null
            }
            </div>
        </div>
         
        </section>
    )
}

export default Detals