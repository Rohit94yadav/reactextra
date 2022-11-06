import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

import{getproducts} from "../Redux/action"
const Productpage = () => {
  const products=useSelector((store)=>store.products)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(products.length===0){
      dispatch(getproducts())
    }
  },[])
  
  return (
    <div style={{ width: "100%" }}>
      <div>
        {products.map((items)=>{
          return( <ProductCard key={items.id} item={items} />)
        })}
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;
