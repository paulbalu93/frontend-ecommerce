import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function CartScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);
  return (
    <div>
      <p>
        productid : {productId} QTY: {quantity}
      </p>
    </div>
  );
}

export default CartScreen;
