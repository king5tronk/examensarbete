import React, { useEffect } from 'react'
import CartItem from './cartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../state/cart/Action';

const Cart = () => {
    const navigate = useNavigate();
    const { cart } = useSelector(store => store)
    const dispatch = useDispatch()
    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updatedItem, cart.deleteCartItem])

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    
    cart.cart.forEach((item) => {
        // Check if the item has a valid price
        if (item.price && typeof item.price === 'number' && !isNaN(item.price)) {
            totalPrice += item.price;
        }
        
        // Check if the item has a valid discounted price
        if (item.totalDiscountedPrice && typeof item.totalDiscountedPrice === 'number' && !isNaN(item.totalDiscountedPrice)) {
            totalDiscountedPrice += item.totalDiscountedPrice;
        }
    });
    const totalAmount = totalPrice - totalDiscountedPrice;


    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 mt-5 relative'>
                <div className='col-span-2'>
                    {cart.cart?.map((item) => <CartItem item={item} />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh]mt-5 lg:mt-0'>
                    <div className='shadow-2xl'>
                        <p className='uppercase font-bold opacity-70 pb-4 text-xl pt-5'>Price details</p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-10 m-3'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>{totalPrice} $</span>

                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>{totalDiscountedPrice} $</span>

                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>

                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Total Amount</span>
                                <span className=' text-green-600'>{totalAmount} $</span>
                            </div>

                        </div>
                        <Button onClick={handleCheckout} variant="contained" className='w-full mt-2' sx={{ px: "2.5rem", py: "1rem", bgcolor: "green" }}>
                            Checkout
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart