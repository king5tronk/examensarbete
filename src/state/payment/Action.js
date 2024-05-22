import axios from 'axios';


// Define your action type constants
const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

const CAPTURE_ORDER_REQUEST = 'CAPTURE_ORDER_REQUEST';
const CAPTURE_ORDER_SUCCESS = 'CAPTURE_ORDER_SUCCESS';
const CAPTURE_ORDER_FAILURE = 'CAPTURE_ORDER_FAILURE';

// Action creators for creating an order
const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST });
const createOrderSuccess = (orderId) => ({ type: CREATE_ORDER_SUCCESS, payload: orderId });
const createOrderFailure = (error) => ({ type: CREATE_ORDER_FAILURE, payload: error });

// Action creators for capturing an order
const captureOrderRequest = () => ({ type: CAPTURE_ORDER_REQUEST });
const captureOrderSuccess = (captureData) => ({ type: CAPTURE_ORDER_SUCCESS, payload: captureData });
const captureOrderFailure = (error) => ({ type: CAPTURE_ORDER_FAILURE, payload: error });

// Thunk action creator for creating an order
export const createOrderAction = () => async (dispatch) => {
  dispatch(createOrderRequest());
  try {
    // Make an HTTP GET request to your backend API endpoint
    const response = await axios.get('http://localhost:8080/paypal/create-order');
    const orderId = response.data; // Assuming your backend responds with the order ID as a plain string
    // Redirect to PayPal checkout URL
   window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${orderId}`;
    dispatch(createOrderSuccess(orderId)); // Optionally, dispatch a success action
    return orderId; // Return the orderId for chaining
  } catch (error) {
    dispatch(createOrderFailure(error.message));
    console.error('Error creating PayPal order:', error);
    throw error; // Throw the error for chaining
  }
};

export const captureOrderAction = () => async (dispatch) => {
    dispatch(captureOrderRequest());
    try {
      const response = await axios.post('http://localhost:8080/paypal/capture-order');
      const orderStatus = response.data;
  
      if (orderStatus === 'COMPLETED') {
        // If order status is COMPLETED, navigate to the desired page
        window.location.href = 'http://localhost:3000/payment/4';
      } else {
        // Handle other statuses if needed
      }
    } catch (error) {
      dispatch(captureOrderFailure(error.message));
      console.error('Error capturing PayPal order:', error);
    }
  };