import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState()
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId} = useParams();

    const dispatch = useDispatch();
    const { order } = useSelector(store => store)

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);

        setPaymentId(urlParam.get("paypal_payment_id"));
    })

  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert variant='filled' severity='success' sx={{mb:6, width:"fit-content"}}>
                <AlertTitle>Payment Success</AlertTitle>
                congratulations your Order has been placed successfully!
            </Alert>

        </div>

        

    </div>
  )
}

export default PaymentSuccess