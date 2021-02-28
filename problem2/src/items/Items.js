import React from "react";

import "./Items.css";

import Card from "../components/card/Card";

import itemsArray from "../data/itemData.json";

const Items = ({ addToCartBtnHandler, addedToCart }) => {
  return (
    <React.Fragment>
      <h2 className="items-header">Our Items</h2>
      <div className="items-container">
        {itemsArray.map((curElm, index) => {
          return (
            <Card
              key={index}
              itemDetails={curElm}
              addedToCart={addedToCart[index]}
              itemIndex={index}
              addToCartBtnHandler={addToCartBtnHandler}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Items;
