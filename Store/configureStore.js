import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerLaundry from "./reducers/laundryReducer";


export default createStore(reducerLaundry, applyMiddleware(thunk));