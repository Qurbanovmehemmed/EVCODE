import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import Title from "../title/Title";

const Womens = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="womenstart">
      <div className="backImg">

      </div>
      <div className="card-area"> 
       <div className="py-2">
       <Title />
       </div>
        <div className="container d-flex flex-wrap justify-content-between">
          {products && products.length > 0
            ? products.map((product) => (
                <div key={product._id} >
                  <div className="row ">
                   <div>
                   <div >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                        style={{
                          width: "255px",
                          height: "270px",
                        }}
                      />
                    </div>
                    <div>
                      <h2>{product.name}</h2>
                      <p>${product.price}</p>
                     
                    </div>
                   </div>
                  </div>
                </div>
              ))
            : "not found"}
        </div>
      </div>
    </section>
  );
};

export default Womens;
