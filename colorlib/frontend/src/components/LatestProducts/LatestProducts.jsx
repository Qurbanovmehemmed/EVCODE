import React from 'react'
import "./LatestProducts.scss"
import { Card } from 'react-bootstrap'
import MyCard from '../myCard/MyCard'

const LatestProducts = () => {
  return (
    <div> 
        <div className="container">
            <div className="row d-flex align-items-center mt-5 ">
                <div className="col-md-9"><h1>Latest Products</h1></div>
                <div className="col-md-3">
                    <ul>
                        <li style={{
                            color:"red"
                        }}>All</li>
                        <li>New</li>
                        <li>Featured</li>
                        <li>Offer</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <Card/>
                <MyCard/>
            </div>
        </div>
    </div>
  )
}

export default LatestProducts