/*import { type } from "@testing-library/user-event/dist/type";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";

export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;

    try {
        const {data} = await api.get(`/api/products/id/${productId}`)

        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message})
    }
}

export const findProducts = (reqData) => async (dispatch) => {

    dispatch({type: FIND_PRODUCTS_REQUEST})
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        
        console.log("product data", data)
        dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: error.message})
    }
}*/

import { mens_kurta } from "../../customer/components/data/mens_Kurta";
import { FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProductsById = (reqData) => (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const { productId } = reqData;

    try {
        // Simulate fetching data asynchronously
        const product = mens_kurta.find((item) => item.id === productId);

        if (product) {
            dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: product });
        } else {
            throw new Error("Product not found");
        }
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};
export const findProducts = (reqData) => (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    // Assuming you'll handle filtering and pagination on the client side

    try {
        // Simulate fetching data asynchronously
        const data = mens_kurta;

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};
