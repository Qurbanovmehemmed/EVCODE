import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useEffect } from "react";
import { getProducts } from "./redux/features/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products && products.length > 0
        ? products.map((product) => (
            <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          ))
        : "not found"}
    </>
  );
}

export default App;
