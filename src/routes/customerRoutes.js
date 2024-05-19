import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/homePage'
import Cart from '../customer/components/cart/cart'
import NavigationFun from '../customer/components/navigation/navigation'
import Footer from '../customer/components/footer/footer'
import Product from '../customer/components/product/product'
import ProductDetails from '../customer/components/productDetails/productDetails'
import Checkout from '../customer/components/checkout/checkout'
import Order from '../customer/components/order/order'

const CustomerRoutes = () => {
    return (
        <div>
            <div>
                <NavigationFun />
            </div>
            <Routes>
                <Route path='/login' element={<HomePage />} />
                <Route path='/register' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} /> {/* Updated route path */}
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                {/*<Route path='/checkout/order/:orderId' element={<orderDetails />} />*/}

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoutes
