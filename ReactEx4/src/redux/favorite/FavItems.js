import {ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT} from './action';


export const initState = {
  favorites: [],
  cart: []
}
  
const favItemsReducer = (state = initState, action) => {
  console.log('Reducer received action:', state);
    switch (action.type) {
      case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          favItem => favItem.id !== action.payload.id,
        ),
      };
      case ADD_TO_CART:
        const itemExist = state.cart.some(item => item.id === action.payload.id);
        console.log(state.cart)
            if (!itemExist) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1
                            };
                        } else {
                            return item;
                        }
                    })
                };
            }
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter( 
          cartItem => cartItem.id !== action.payload.id,
        ),
      };
    
      case INCREMENT:
        return {
            ...state,
            cart: state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                } else {
                    return item;
                }
            })
        };


    case DECREMENT:
        return {
            ...state,
            cart: state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                } else {
                    return item;
                }
            }).filter(item => item.quantity !== 0)
        };
      /**case ADD_TO_CART:
      const { itemId: addToCartId, quantity: addToCartQuantity } = action.payload;
      const existingItem = state.cart.find((item) => item.itemId === addToCartId);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.itemId === addToCartId
              ? { ...item, quantity: item.quantity + addToCartQuantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { itemId: addToCartId, quantity: addToCartQuantity }],
        };
      }

    case REMOVE_FROM_CART:
      const { itemId: removeFromCartId, quantity: removeFromCartQuantity } = action.payload;
      const updatedCartItems = state.cart.map((item) => {
        if (item.itemId === removeFromCartId) {
          const newQuantity = item.quantity - removeFromCartQuantity;
          return newQuantity > 0
            ? { ...item, quantity: newQuantity }
            : null;
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCartItems.filter((item) => item !== null),
      };
*/
      default:
        return state;
    }
  }
  
  export default favItemsReducer;