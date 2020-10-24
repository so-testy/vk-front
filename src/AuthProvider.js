import React, { useContext } from 'react';

const AuthContext = React.createContext({
    user: null,
});

export default AuthContext;
