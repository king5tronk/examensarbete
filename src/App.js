import logo from './logo.svg';
import './App.css';
import NavigationFun from './customer/components/navigation/navigation';
import HomePage from './customer/pages/homePage/homePage';
import Footer from './customer/components/footer/footer';
import Product from './customer/components/product/product';
import React from 'react';
import ProductDetails from './customer/components/productDetails/productDetails';
import Cart from './customer/components/cart/cart';
import Checkout from './customer/components/checkout/checkout';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './routes/customerRoutes';

function App() {
  return (
    <div className="">

<Routes>
  <Route path='/*' element={<CustomerRoutes/>}></Route>

</Routes>

      
      <div>


      </div>
      <div>

        </div>
    </div>
  );
}

export default App;
