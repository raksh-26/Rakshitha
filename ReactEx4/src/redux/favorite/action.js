export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addItemToFav = item => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: item,
    });
  };
  
  export const removeItemFromFav = item => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: item,
    });
  };

  export const addItemToCart = item => dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
  
  export const removeItemFromCart = item => dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  };

  export const incrItem = item => dispatch => {
    dispatch({
      type: INCREMENT,
      payload: item,
    });
  };

  export const decrItem = item => dispatch => {
    dispatch({
      type: DECREMENT,
      payload: item,
    });
  };
  

  /**export const addItemToCart = (itemId, quantity = 1) => dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: { itemId, quantity },
    });
  };
  
  export const removeItemFromCart = (itemId, quantity = 1) => dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { itemId, quantity },
    });
  };
*/
  