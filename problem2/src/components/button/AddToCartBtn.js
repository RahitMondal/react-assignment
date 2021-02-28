import "./Button.css";

const AddToCartBtn = ({ addedToCart, itemIndex, addToCartBtnHandler }) => {
  return (
    <button
      className={`btn ${addedToCart ? "disabled" : "add-to-cart-btn"}`}
      onClick={addToCartBtnHandler}
      value={itemIndex}
      disabled={addedToCart}
    >
      {addedToCart ? "Added To Cart" : "Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;
