import { combineReducers } from 'redux';
import auth from './auth'
import profile from './profile'
import types from './types'
import products from './products'
import cart from './cart'
import selectedCategory from './selectedCategory'
import selectedProduct from './selectedProduct'
import selectedSize from './selectedSize'

const reducers = combineReducers({
  auth,
  profile,
  types,
  products,
  cart,
  selectedCategory,
  selectedProduct,
  selectedSize,
});

export default reducers;
