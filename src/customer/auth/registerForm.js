import { Button, Grid, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({handleClose}) => {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openSnackbar2, setOpenSnackbar2] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const userData = {
            username: formData.get('email'), // Assuming email is used as username
            password: formData.get('password'),
        };

        try {
            const response = await fetch('http://localhost:8080/register', { // Ensure this matches your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Registration successful
                console.log('User registered successfully.');
                setOpenSnackbar(true); // Show success alert
                // Redirect to login page after successful registration
                handleClose();
                setTimeout(() => {
                    navigate("/login");
                }, 2000); // Adjust the delay as needed
            } else {
                setOpenSnackbar2(true);
                // Handle registration failure
                console.error('Failed to register user.');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email (Username)'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            type='password'
                            autoComplete='current-password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className='bg-[#9155FD] w-full'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you already have an account ?</p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Login</Button>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    User registered successfully!
                </Alert>
            </Snackbar>
            <Snackbar
                open={openSnackbar2}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    Registration Failed!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RegisterForm;
