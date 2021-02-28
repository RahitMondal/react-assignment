import "./WideCard.css";

import RemoveFromCartBtn from "../button/RemoveFromCartBtn";

import itemsArray from "../../data/itemData.json";

const WideCard = ({ itemIndex, removeFromCartBtnHandler }) => {
  const curItem = itemsArray[itemIndex];
  return (
    <div className="wide-card">
      <div className="image-wrapper">
        <img
          src={curItem.imgSrc}
          alt={curItem.itemName}
          title={curItem.itemName}
        />
      </div>

      <div className="cart-item-desc">
        <h3 style={{ textAlign: "center", color: "palevioletred" }}>
          {curItem.itemName}
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <strong>Price: Rs. {curItem.price[0]}</strong>
      </div>

      <RemoveFromCartBtn
        itemIndex={itemIndex}
        removeFromCartBtnHandler={removeFromCartBtnHandler}
      />
    </div>
  );
};

export default WideCard;
