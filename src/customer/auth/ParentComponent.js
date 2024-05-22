// ParentComponent.js

import React, { useState } from 'react';
import LoginForm from './loginForm';

const ParentComponent = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <LoginForm setLoggedIn={setLoggedIn} />
        </div>
    );
};

export default ParentComponent;
