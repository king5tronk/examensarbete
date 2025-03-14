import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";
import { customProductReducer } from "./product/Reducer";
import { cartReducer } from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";
import { captureOrderReducer, createOrderReducer } from "./payment/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products: customProductReducer,
    cart: cartReducer,
    order: orderReducer,
    orderCreate: createOrderReducer,
    orderCapture: captureOrderReducer,
    

})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))