import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

import "./HomeIcon.css";

const CartIcon = () => {
  return (
    <span className="home-icon">
      <Link to="/items">
        <IoMdHome />
      </Link>
    </span>
  );
};

export default CartIcon;
