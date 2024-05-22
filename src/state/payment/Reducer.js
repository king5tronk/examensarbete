import { CAPTURE_ORDER_FAILURE, CAPTURE_ORDER_REQUEST, CAPTURE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../order/ActionType";

const initialState = {
    loading: false,
    error: null,
    orderId: null,
    captureData: null,
  };
  
  const createOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return { ...state, loading: true };
      case CREATE_ORDER_SUCCESS:
        return { ...state, loading: false, orderId: action.payload };
      case CREATE_ORDER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  const captureOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CAPTURE_ORDER_REQUEST:
        return { ...state, loading: true };
      case CAPTURE_ORDER_SUCCESS:
        return { ...state, loading: false, captureData: action.payload };
      case CAPTURE_ORDER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export { createOrderReducer, captureOrderReducer };
  