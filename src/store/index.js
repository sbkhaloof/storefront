import { applyMiddleware,combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import  ReduceProducts from './products';
import ReduceCategory from './categories';
import ReduceCart from './cart'

import thunk from './middleware/thunk'

// This dependecyenables the Redux Dev Tools in your chrome console.
// import { composeWithDevTools } from "redux-devtools-extension";

// Combine reducers isn't really necessary when you only have one reducer.
// But it's good to have it in case you have multiple reducers.
// And 99.99% of all Redux apps will have more than one reducer.
let reducers = combineReducers({ ReduceProducts,ReduceCategory,ReduceCart});

//createStore 
const store = () => {
    return createStore(reducers,applyMiddleware(thunk));
}

export default store();