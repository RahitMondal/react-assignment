import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

import "./CartIcon.css";

const CartIcon = ({ cartItemsCount }) => {
  return (
    <span className="cart-icon">
      <Link to="/cart">
        <IoMdCart />
      </Link>
      &nbsp;&nbsp;&nbsp;
      <span className="cart-count">{cartItemsCount}</span>
    </span>
  );
};

export default CartIcon;
