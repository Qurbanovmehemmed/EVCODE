import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
  return (
    <div>
        <ul className='listNav' style={{display:"flex",gap:"30px",listStyle:"none",fontSize:"15px"}}>
            <li style={{color:"green"}} ><Link to="/">HOME</Link></li>
            <li>ABOUT</li>
            <li>PAGES</li>
            <li>OUR PRODUCT</li>
            <li>FARMING PRACTICE</li>
            <li>NEWS</li>
            <li ><Link to="/contact">CONTACT</Link></li>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      
    </div>
  )
}

export default Navlist
