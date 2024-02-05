import React from 'react';

export const UserContext = React.createContext({
    name: '', 
    eMail: '',
    isAuthenticated: false
});