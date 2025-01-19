import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { fetchProducts } from "../../redux/features/productSlice";
import {
  deleteBasket,
  minusBtn,
  plusBtn,
} from "../../redux/features/basketSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  console.log(basket);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const deleted = (item) => {
    dispatch(deleteBasket(item));
  };

  const total = basket.reduce((acc, sum) => acc + sum.price * sum.count, 0);

  const up = (item) => {
    dispatch(plusBtn(item));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket && basket.length > 0 ? (
            basket.map((item, index) => (
              <tr key={item._id}>
                <td><img src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>${item.price * item.count}</td>

                <td>{item.category}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                  >
                    <button onClick={() => up(item)}>+</button>
                    <p>{item.count}</p>
                    <button onClick={() => dispatch(minusBtn(item))}>-</button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleted(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th
                colSpan={5}
                style={{
                  textAlign: "center",
                }}
              >
                Your basket is empty
              </th>
            </tr>
          )}
        </tbody>
      </Table>
      <div>
        <p>Total Price: ${total}</p>
      </div>
    </div>
  );
};

export default Basket;
