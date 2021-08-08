import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart =
  (productId, quantity) => async (dispatch, getstate) => {
    const { data } = await Axios.get(`/products/${productId}`);
    console.log(getstate());
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        quantity,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getstate().cart.cartItems)
    );
  };
