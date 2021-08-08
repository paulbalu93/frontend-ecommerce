import React, { useEffect } from "react";
import data from "../data";
import Product from "../components/Product.js";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions.js";

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    // const fetchData = async () => {
    // 	try {
    // 		setLoading(true);
    // 		const { data } = await axios.get('/products');
    // 		setLoading(false);
    // 		setProducts(data);
    // 	} catch (error) {
    // 		setError(error.message);
    // 		setLoading(false);
    // 	}
    // };
    // fetchData();
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox> </LoadingBox>
      ) : error ? (
        <ErrorBox variant="danger">{error}</ErrorBox>
      ) : (
        <div class="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
