import React from 'react'
import './Contacts.css'
import ContFirst from './ContFirst'
import Container from './Container'
import Map from './Map'
import Last from './Last'
import Detals from './Detals'
function Contacts() {
  return (
    <div>
        <ContFirst />
        <Container />
        <Map />
        <Last />
        <Detals  btnname={"1. Fusce eu lorem et dui #09C maximus varius?"} text={"#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas sollicitudin vel mass. Nam vulputate vulputate quam mollis pretium. Morbi volutpat condimentum."}/>
        <Detals  btnname={"2. Vestibulum #999 ante ipsum primis in faucibus orci?"} text={"Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel,"}/>
        <Detals  btnname={"3. An erat. Lorem ipsum dolor sit amet consectetur?"} text={"Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elite. Maecenas interdum porttitor imperdiet. Integer facilisis."}/>
        <Detals  btnname={"4. Ut ac erat sit amet neque efficitur faucibus et in lectus?"} text={"Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, nor zero venenatis nunc, vel maximus ligula nor the sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."}/>
    </div>
  )
}

export default Contacts