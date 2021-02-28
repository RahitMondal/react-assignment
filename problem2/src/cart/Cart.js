import React from "react";
import "./Cart.css";

import WideCard from "../components/wideCard/WideCard";

const Cart = ({ removeFromCartBtnHandler, addedToCart }) => {
  let cartIsEmpty = true;
  return (
    <React.Fragment>
      <h4 className="cart-header">You have ordered</h4>
      {addedToCart.map((value, index) => {
        if (value) {
          cartIsEmpty = false;
          return (
            <WideCard
              key={index}
              itemIndex={index}
              removeFromCartBtnHandler={removeFromCartBtnHandler}
            ></WideCard>
          );
        }
        return null;
      })}
      {cartIsEmpty && <h3 style={{ textAlign: "center" }}>Nothing Yet!</h3>}
    </React.Fragment>
  );
};

export default Cart;
