import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  console.log(wishlist);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
