import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import Hero from "../../components/hero/Hero";
import Deals from "../../components/deals/Deals";
import Mens from "../../components/mens/Mens";
import Women from "../../components/women/Women";
import FootProducts from "../../components/footProducts/FootProducts";
import Premium from "../../components/premium/Premium";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>  
      <Hero />
      <Deals/>
      <Mens/>
      <Women/>
      <FootProducts/>
      <Premium/>
      <div>
      

  
  </div></div>
  
  );
};

export default Home;
