import {
  PROCUCT_LIST_SUCCESS,
  PROCUCT_LIST_REQUEST,
  PROCUCT_LIST_FALI,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PROCUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PROCUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PROCUCT_LIST_FALI:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
