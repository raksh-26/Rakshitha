import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import favItemsReducer from './favorite/FavItems';

const rootReducer = combineReducers({
    favItemsReducer: favItemsReducer
    
  });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store

