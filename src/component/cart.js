

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Number of items in Shopping Cart: {state.numOfItems}</h2>
      <button className = "blue"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add New Item to Cart
      </button>
      <button className = "red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Delete Item from Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
