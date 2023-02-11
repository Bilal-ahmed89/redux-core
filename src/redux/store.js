import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


import { productReducer } from '../redux/productReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers(
    {
        product: productReducer,
    }
)

const store = createStore(rootReducer,composedEnhancer);



export default store