import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import PaymentMethodScreen from "./components/PaymentMethodScreen";
import ProductScreen from "./components/ProductScreen";
import CartScreen from "./components/CartScreen";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SigninScreen from "./components/SigninScreen";
import RegisterScreen from "./components/RegisterScreen";
import ShippingAddressScreen from "./components/ShippingAddressScreen";
import { signout } from "./actions/userActions";
// import { useDispatch } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
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

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id?" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer class="row center">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
