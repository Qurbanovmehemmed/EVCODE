import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  fetchProducts,
  sortAzProducts,
  sortHighToLow,
  sortLowToHigh,
  sortZaProducts,
} from "../../redux/features/productSlice";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const deleteProduct = (_id) => {
    dispatch(deletePost(_id));
    console.log(products._id);
  };

  const sortAz = () => {
    dispatch(sortAzProducts());
  };
  const sortZa = () => {
    dispatch(sortZaProducts());
  };
  const low = () => {
    dispatch(sortLowToHigh());
  };
  const high = () => {
    dispatch(sortHighToLow());
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <button className="btn btn-success">Create</button>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={()=>sortAz()}>
            AZ
          </button>
          <button className="btn btn-primary" onClick={()=>sortZa()}>
            ZA
          </button>
          <button className="btn btn-primary" onClick={()=>low()}>
            low-high
          </button>
          <button className="btn btn-primary" onClick={()=>high()}>
            high-low
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(_id) => {
                      dispatch(deletePost(item._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPanel;
