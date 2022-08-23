
import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
import img1 from './images/01.jpg'
import img2 from './images/02.jpg'
import img3 from './images/03.jpg'
import img4 from './images/04.jpg'
import img5 from './images/05.jpg'
import img6 from './images/06.jpg'
import img7 from './images/07.jpg'
import img8 from './images/08.jpg'
function Buttons() {
    let arr = [
        {
            id: 1,
            Image: img1,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type:"noodle",
           

        },

        {
            id: 2,
            Image: img2,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "salad",
        
        },

        {
            id: 3,
            Image: img3,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "noodlesalad",
            
           
           
        },

        {
            id: 4,
            Image: img4,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "noodlesalad",
          
            
        },

        {
            id: 5,
            Image: img5,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "noodlesalad",
           
        },

        {
            id: 6,
            Image: img6,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "salad", 

        },
        {
            id: 7,
            Image: img7,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "noodle",
           
        },

        {
            id: 8,
            Image: img8,
            title: "Fusce dictum finibus",
            desc: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type:"noodlesalad"

        }
    ]

    let [data, setData] = useState(arr)
    let [buttons, setButtons] = useState([])

    let filter = (type) => {
        if(type=="pizza" ){
            setData(arr)
            return
        }
        
        let x = arr.filter((par) => {
            return par.type.includes(type)
        }).reverse()

        setData(x)
    }





    return (
        <section className='section2'>
            <div className='buttons'>
                <button className='btn0' button={buttons}
                    onClick={()=>{
                        filter("pizza")
                    }}

                >Pizza</button>
                <button className='btn0'  button={buttons}
                    onClick={()=>{
                        filter("salad")
                    }}> Salad</button>
                <button className='btn0'  button={buttons}
                    onClick={()=>{
                        filter("noodle")
                    }}>Noodle</button>
            </div>
            <div className='Gal'>

                {
                    data.map((par) => {
                        return (
                            <div className='product' key={par.id}>

                                <img src={par.Image} alt='hjkl'></img>
                                <h4 className='product-name'>{par.title}</h4>
                                <p className='ingrediets'>{par.desc}</p>
                                <p className='price'>{par.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Buttons