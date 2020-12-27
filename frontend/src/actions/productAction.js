import axios from 'axios';
import {
  PROCUCT_LIST_SUCCESS,
  PROCUCT_LIST_REQUEST,
  PROCUCT_LIST_FALI,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PROCUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');
    dispatch({ type: PROCUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROCUCT_LIST_FALI,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
