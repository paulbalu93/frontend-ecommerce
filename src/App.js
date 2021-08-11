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
import PlaceOrderScreen from "./components/PlaceOrderScreen";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./components/ProductListScreen";
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
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id?" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
        </main>
        <footer class="row center">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
