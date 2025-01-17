import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegStar } from "react-icons/fa6";
const MyCard = () => {
  return (
    <div className="col-sm-12 d-flex flex-wrap justify-content-between mt-5">
      <Card
        style={{
          width: "22rem",
          border:"none"
       
        }}
      >
        <Card.Img
          variant="top"
          src="https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png.webp"
        />
        <Card.Body style={{
               display: "flex",
               flexDirection: "column",
               gap: "15px",
               textAlign: "center",
        }}>
          <div>
            <FaRegStar style={{
                color:"#ffbc07",
                marginRight:"5px"
        
            }} />
            <FaRegStar  style={{
                color:"#ffbc07",
                marginRight:"5px"
        
            }}/>
            <FaRegStar  style={{
                color:"#ffbc07",
                marginRight:"5px"
        
            }}/>
            <FaRegStar  style={{
                marginRight:"5px"
        
            }}/>
            <FaRegStar  style={{
                marginRight:"5px"
        
            }}/>
          </div>
          <Card.Title>Green Dress with details</Card.Title>

          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "22rem",
       
        }}
      >
        <Card.Img
          variant="top"
          src="https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png.webp"
        />
        <Card.Body style={{
               display: "flex",
               flexDirection: "column",
               gap: "15px",
               textAlign: "center",
        }}>
          <div>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <Card.Title>Green Dress with details</Card.Title>

          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "22rem",
       
        }}
      >
        <Card.Img
          variant="top"
          src="https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png.webp"
        />
        <Card.Body style={{
               display: "flex",
               flexDirection: "column",
               gap: "15px",
               textAlign: "center",
        }}>
          <div>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <Card.Title>Green Dress with details</Card.Title>

          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
