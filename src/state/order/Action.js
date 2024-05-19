/*import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post('/api/orders', reqData.address);

        if (data.id) {
            reqData.navigate({search: `step=3&order_Id=${data.id}`})
        }
        console.log("created order", data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });

    }catch (error) {
        console.log("error", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
        const { data } = await api.post(`/api/orders/${orderId}`);

        console.log("order by id", data);
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });

    }catch (error) {
        console.log("error", error);
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
    }
}*/
//LOCALSTORAGE---------------->>>>>>>>>>>>>
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./ActionType";

// Define a key for localStorage
const ORDER_KEY = 'order';

export const createOrder = (orderData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        // Save the order data to localStorage
        localStorage.setItem(ORDER_KEY, JSON.stringify(orderData));
        if (orderData.id){
            orderData.navigate({search: `step=3&order_Id=${orderData.id}`})
        }

        console.log("created order", orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: orderData });

    } catch (error) {
        console.log("error", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
}
