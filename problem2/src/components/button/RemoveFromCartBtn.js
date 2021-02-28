import "./Button.css";

const AddToCartBtn = ({ itemIndex, removeFromCartBtnHandler }) => {
  return (
    <button
      className="btn remove-from-cart-btn"
      onClick={removeFromCartBtnHandler}
      value={itemIndex}
    >
      Remove
    </button>
  );
};

export default AddToCartBtn;
