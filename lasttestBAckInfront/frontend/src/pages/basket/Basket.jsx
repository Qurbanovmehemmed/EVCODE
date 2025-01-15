import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, deleteBasket } from "../../redux/features/basketSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  const handleAddProduct = (product) => {
    dispatch(addBasket(product));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(deleteBasket({ _id: productId }));
  };
  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Product image</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                
                <td><img src={product.image} alt=""  style={{
                  width: "200px",
                  height:"150px"
                }} /></td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleRemoveProduct(product._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No products in your basket</td>
            </tr>
          )}
          <div>
            <p>Total:${totalAmount}</p>
          </div>
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
