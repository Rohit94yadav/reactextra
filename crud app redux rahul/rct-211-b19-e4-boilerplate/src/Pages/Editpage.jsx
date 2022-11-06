import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { store } from "../Redux/store";
const Editpage = () => {
  const{id}=useParams()
  const[currentproduct,setcurrentproducts]=useState({})
  const products=useSelector(state=>store.products)

  useEffect(()=>{
    if(id){
      const productbyid=products.find((product)=>product.id===Number(id))
      productbyid && setcurrentproducts(productbyid)}
    
  },[products,id])
  return (
    
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text"/>
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button">Update</button>
      </div>
    </div>
    

  );
};

export default Editpage;
