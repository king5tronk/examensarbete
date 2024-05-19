/*import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAILURE, REMOVE_ITEM_FROM_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: [],
}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.cartItems],
                loading: false,
            }
        case ADD_ITEM_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                cart: action.payload,
                loading: false,
            }
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                loading: false,
            }
        case UPDATE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case UPDATE_CART_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case REMOVE_ITEM_FROM_CART_REQUEST:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
                loading: false,
            }
        case REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
                loading: true,
            }
        case REMOVE_ITEM_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }            
        

        default:
            return state;
    }
}*/

import { StackedBarChart } from "@mui/icons-material";
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
import { stepLabelClasses } from "@mui/material";
import { updateCartItem } from "./Action";
  
  const initialState = {
    cart: [],
    loading: false,
    error: null
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_CART_SUCCESS:
        return {
          ...state,
          cart: action.payload,
          loading: false,
        };
      case GET_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADD_ITEM_TO_CART_REQUEST:
      case REMOVE_ITEM_FROM_CART_REQUEST:
      case UPDATE_CART_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case ADD_ITEM_TO_CART_SUCCESS:
        localStorage.setItem("cart", JSON.stringify(action.payload));
        return {
          ...state,
          cart: action.payload,
          loading: false
        };
      case ADD_ITEM_TO_CART_FAILURE:
      case REMOVE_ITEM_FROM_CART_FAILURE:
      case UPDATE_CART_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case REMOVE_ITEM_FROM_CART_SUCCESS:
        return{
          ...state,
          deleteCartItem: action.payload,
          loading: false
        }
      case UPDATE_CART_ITEM_SUCCESS:
        return {
          ...state,
          updateCartItem: action.payload,
          loading: false
        };

      default:
        return state;
    }
  };
  