import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import data from "../data.js";
import LoadingBox from "./LoadingBox.js";
import ErrorBox from "./ErrorBox.js";
import Rating from "./Rating.js";
import { productDetailss } from "../actions/productActions.js";
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  // const product = data.products.find((x) => x._id === props.match.params.id);

  // if (!product) {
  // 	return <div> Product not found</div>;
  // }\
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, product, error } = productDetails;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(productDetailss(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}?quantity=${quantity}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox> </LoadingBox>
      ) : error ? (
        <ErrorBox variant="danger">{error}</ErrorBox>
      ) : (
        <div class="row center">
          {
            <div>
              <Link to="/"> Back to Results</Link>
              <div className="row top">
                <div className="col-2">
                  <img
                    className="large"
                    src={product.image}
                    alt={product.name}
                  ></img>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1> {product.name}</h1>
                    </li>
                    <li>
                      {" "}
                      <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}
                      />{" "}
                    </li>
                    <li> Price: ${product.price}</li>
                    <li>
                      Description: <p>{product.description}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div> Price</div>
                          <div>{product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div> Status</div>
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success"> In Stock</span>
                            ) : (
                              <span className="failure"> Out of stock</span>
                            )}
                          </div>
                        </div>
                      </li>
                      {product.countInStock > 0 && (
                        <>
                          <li>
                            <div className="row">
                              <div> Quantity</div>

                              {/* {console.log(product.countInStock)}
                              {console.log([...Array(product.countInStock)])} */}

                              <div>
                                <select
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}
                                >
                                  {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {" "}
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button
                              onClick={handleAddToCart}
                              className="primary block"
                            >
                              Add to cart
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}
