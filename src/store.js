import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

// import data from './data.js';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState = {};

// const reducer = (state, action) => {
// 	// return { products: data.products };
// };
const reducer = combineReducers({ productList: productListReducer });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
