import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='heroStart'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className='heroImg'>
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="" />    

                </div>

                </div>
                <div className="col-md-6">
                    <div className='heroText'>
                    <p className='blue'>60% Discount</p>
                    <h1>Winter <br />Collection</h1>
                    <p>Best Cloth Collection By 2020!</p>
                    <button className='btn btn-primary'>Shop Now</button>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero