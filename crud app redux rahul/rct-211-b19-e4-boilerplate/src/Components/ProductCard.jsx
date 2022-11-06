import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delproducts, getproducts } from "../Redux/action";

const ProductCard = ({ item }) => {

  const dispatch = useDispatch();
  const handledelete = (id) => {
    
    const params = {
      id: id,
    };
    dispatch(delproducts(params)).then(()=>{
      dispatch(getproducts())
    });
  };
  return (
    
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.name}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img data-cy="product-card-image" src={item.image} alt="Product" />
      </div>
      <div data-cy="product-card-price">{item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={()=>handledelete(item.id)}>Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
    <Link to="/edit/${item}">

    <button data-cy="edit-button">Edit Product</button>

    </Link>
      </div>
    </div>

  );
};

export default ProductCard;
