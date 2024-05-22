import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AdressCard from '../adressCard/adressCard'
import { green } from '@mui/material/colors'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../../state/order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAdressForm = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zipCode'),
            phoneNumber: data.get('phoneNumber')
        }
        const orderData={address, navigate}
dispatch(createOrder(orderData))
        console.log('address', address)
    }

    const handleCheckout = () => {
        navigate('/checkout?step=3')
    }


    return (
        <div className=''>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='mt-5 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: green }} size="large" variant="contained">Deliver Here</Button>
                    </div>

                </Grid>
                <Grid item xs={12} lg={7}>

                    <Box className="mt-3 border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zipCode"
                                        name="zipCode"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button onClick={handleCheckout} sx={{ py:1.5, mt: 2, bgcolor: green }}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                        >
                                        Deliver Here
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>

                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAdressForm