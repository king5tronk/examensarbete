import React, { useState } from 'react';
import AdressCard from '../adressCard/adressCard';
import { Button } from '@mui/material';
import CartItem from '../cart/cartItem';
import { useDispatch } from 'react-redux';
import { createOrderAction, captureOrderAction } from '../../../state/payment/Action';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleCheckout = async () => {
        const orderId = await dispatch(createOrderAction());
    };
    

    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border mb-2'>
                <AdressCard />
            </div>
            <div>
                <div className='lg:grid grid-cols-3 relative'>
                    <div className='col-span-2'>
                        {/*[1,1,1,1].map((item) => <CartItem />)*/}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh]mt-5 lg:mt-0'>
                        <div className='shadow-2xl'>
                            <p className='uppercase font-bold opacity-70 pb-4 text-xl pt-5'>Price details</p>
                            <hr />
                            <div className='space-y-3 font-semibold mb-10 m-3'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>297 $</span>
                                </div>
                                <div className='flex justify-between pt-3 '>
                                    <span>Discount</span>
                                    <span className='text-green-600'>150 $</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Total Amount</span>
                                    <span className=' text-green-600'>147 $</span>
                                </div>
                            </div>
                            <Button variant="contained" className='w-full mt-2' sx={{ px: "2.5rem", py: "1rem", bgcolor: "green" }}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
