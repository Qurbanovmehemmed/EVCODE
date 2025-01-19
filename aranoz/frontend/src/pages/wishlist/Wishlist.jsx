import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import { deleteWishlist } from "../../redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log(wishlist);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const deleted = (item) => {
    dispatch(deleteWishlist(item));
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
          {wishlist && wishlist.length > 0 ? (
            wishlist.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
                <td>
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
                Your wishlist is empty
              </th>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
