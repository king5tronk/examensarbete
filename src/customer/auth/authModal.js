import { Box, Modal } from '@mui/material';
import React from 'react';
import RegisterForm from './registerForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './loginForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open, setIsLoggedIn }) => {
  const location = useLocation();
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === '/login' ? (
            <LoginForm handleClose={handleClose} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <RegisterForm handleClose={handleClose} setIsLoggedIn={setIsLoggedIn} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
