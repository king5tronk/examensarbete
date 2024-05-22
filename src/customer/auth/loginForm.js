import { Button, Grid, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ handleClose, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');

    useEffect(() => {
        // Check if the user is already logged in by reading from localStorage
        const isLoggedIn = localStorage.getItem('loggedIn');
        if (isLoggedIn === 'true') {
            handleClose();
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
    }, [navigate, handleClose, setIsLoggedIn]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                localStorage.setItem('loggedIn', 'true');
                setIsLoggedIn(true);
                setAlertMessage('Login successful!');
                setAlertSeverity('success');
                setOpenSnackbar(true);
                handleClose();
                navigate('/dashboard');
            } else {
                const textResult = await response.text();
                setAlertMessage(textResult);
                setAlertSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>If you don't have an account?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default LoginForm;
