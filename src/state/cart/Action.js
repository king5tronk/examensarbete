/*import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAILURE, REMOVE_ITEM_FROM_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })

    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}
export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

    try {
        const { data } = await api.put('/api/cart/add', reqData)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART_REQUEST })

    try {
        const { data } = await api.delete(`/api/cart_items/${reqData.cartItemsId}`)
        dispatch({ type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.put(`/api/cart_items/${reqData.cartItemsId}`, reqData.data)
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}*/
import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_ITEM_FROM_CART_FAILURE,
    REMOVE_ITEM_FROM_CART_REQUEST,
    REMOVE_ITEM_FROM_CART_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
  } from "./ActionType";
  
  // Define action creators for managing the local cart
  
  export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
  
    try {
      // Simulate fetching data from the server
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      dispatch({ type: GET_CART_SUCCESS, payload: cartData });
      console.log("cart_ ",cartData);

    } catch (error) {
      dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
  };
  
  export const addItemToCart = (item) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  
    try {
      // Retrieve current cart items from local storage
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Add the new item to the cart
      cartData.push(item);
  
      // Update the local storage with the new cart data
      localStorage.setItem("cart", JSON.stringify(cartData));
  
      // Dispatch success action with updated cart data
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: cartData });
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
  };
  
  export const removeCartItem = (itemId) => async (dispatch) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART_REQUEST });
  
    try {
      // Retrieve current cart items from local storage
      let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Remove the item from the cart based on its ID
      cartData = cartData.filter((item) => item.id !== itemId);
  
      // Update the local storage with the updated cart data
      localStorage.setItem("cart", JSON.stringify(cartData));
  
      // Dispatch success action with updated cart data
      dispatch({ type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: cartData });
    } catch (error) {
      dispatch({ type: REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message });
    }
  };
  
  export const updateCartItem = (updatedItem) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  
    try {
      // Retrieve current cart items from local storage
      let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Find the index of the item to be updated
      const index = cartData.findIndex((item) => item.id === updatedItem.id);
  
      // If the item is found, update it in the cart
      if (index !== -1) {
        cartData[index] = updatedItem;
      }
  
      // Update the local storage with the updated cart data
      localStorage.setItem("cart", JSON.stringify(cartData));
  
      // Dispatch success action with updated cart data
      dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: cartData });
    } catch (error) {
      dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    }
  };
  