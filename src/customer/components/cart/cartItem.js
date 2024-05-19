import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../state/cart/Action';

const CartItem = ({item}) => {

const dispatch = useDispatch();

const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity+num}, cartItemId: item?.id }
    dispatch(updateCartItem(data))
}
const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id))
}

    return (
        <div className='p-5 shadow-lg border rounded-md m-1'>
            <div className='flex item-center'>
                <div className='w-[5rem] h[5rem] lg:w[9rem] lg:h-[9rem]'>
                    <img className="w-full h-full object-cover object-top" src={item.imageUrl} alt="" />
                </div>

                <div className='ml-5 space-y-1 pt-4 pl-5'>
                    <p className='font-semibold'>{item.title}</p>
                    <p className='opacity-70'>Size: {item.size?.name} </p>
                    <div className='flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6'>
                        <p className='text-green-600 font-semibold'>{item.totalDiscountedPrice}$</p>
                        <p className='opacity-50 line-through'>{item.price}$</p>
                        <p className='text-green-600 font-semibold'>{item.discountPercent}% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'> 1{item.quantity}</span>
                    <IconButton onClick={() => handleUpdateCartItem(1)} sx={{color:"green"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:"red"}}>
                        remove
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem