import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import CartScreen from "./components/CartScreen";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div class="grid-container">
        <header class="row">
          <div>
            {/* <a class="brand" href="/">
              {" "}
              Kokoland
            </a> */}
            <Link className="brand" to="/">
              KOKOLAND
            </Link>
          </div>
          <div>
            {/* <a href="/cart"> Cart </a> */}
            <Link to="/cart">
              Cart{" "}
              {cartItems.length > 0 && (
                <span className="badge"> {cartItems.length}</span>
              )}
            </Link>

            <a href="/signin"> Signin </a>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id?" component={ProductScreen}></Route>
          <Route path="/cart/:id" component={CartScreen}></Route>
        </main>
        <footer class="row center">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
