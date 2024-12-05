import React from 'react'
import Logo from './Logo/Logo'
import Navlist from './Navlist/Navlist'

const Navbar = () => {
  return (
    <div className='container nav'style={{display:"flex",justifyContent:"space-between",padding:"30px 0px",alignItems:"center"}}>
      <Logo/>
      <Navlist/>
    </div>
  )
}

export default Navbar
