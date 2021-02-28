import "./Card.css";

import AddToCartBtn from "../button/AddToCartBtn";

const Card = ({ itemDetails, addedToCart, itemIndex, addToCartBtnHandler }) => {
  return (
    <div className="card">
      <div className="image-box">
        <img
          src={itemDetails.imgSrc}
          alt={itemDetails.itemName}
          title={itemDetails.itemName}
        />
      </div>
      <div className="item-description">
        <h3>{itemDetails.itemName}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <strong>Price: Rs. {itemDetails.price[0]}</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="line-through">Rs. {itemDetails.price[1]}</span>
      </div>
      <AddToCartBtn
        addedToCart={addedToCart}
        itemIndex={itemIndex}
        addToCartBtnHandler={addToCartBtnHandler}
      />
    </div>
  );
};

export default Card;
