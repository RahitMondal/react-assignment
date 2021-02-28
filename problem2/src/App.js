import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";

// importing all the required components
import Items from "./items/Items";
import Cart from "./cart/Cart";
import HomeIcon from "./components/homeIcon/HomeIcon";
import CartIcon from "./components/cartIcon/CartIcon";

// importing items' data from json data file
import itemsArray from "./data/itemData.json";

function App() {
  const [addedToCart, setAddedToCart] = useState(itemsArray.map(() => false)); // creating an array of the length of number of items; false indicates the item is not addedToCart
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCartBtnHandler = (evt) => {
    const itemIndex = parseInt(evt.target.value);
    const newCartItemsCount = cartItemsCount + 1;
    let newAddedToCart = [...addedToCart];
    newAddedToCart[itemIndex] = true;
    setAddedToCart(newAddedToCart);
    setCartItemsCount(newCartItemsCount);
  };

  const removeFromCartBtnHandler = (evt) => {
    const itemIndex = parseInt(evt.target.value);
    const newCartItemsCount = cartItemsCount - 1;
    let newAddedToCart = [...addedToCart];
    newAddedToCart[itemIndex] = false;
    setAddedToCart(newAddedToCart);
    setCartItemsCount(newCartItemsCount);
  };

  return (
    <Router>
      <header className="page-header">
        <HomeIcon />
        <div>Shopping Cart</div>
        <CartIcon cartItemsCount={cartItemsCount} />
      </header>
      <Switch>
        <Route path="/items" exact>
          <Items
            addToCartBtnHandler={addToCartBtnHandler}
            addedToCart={addedToCart}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            removeFromCartBtnHandler={removeFromCartBtnHandler}
            addedToCart={addedToCart}
          />
        </Route>
        <Redirect to="/items" />
      </Switch>
    </Router>
  );
}

export default App;
