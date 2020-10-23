import React, { useContext } from 'react';

const NavigationContext = React.createContext({
    activeView: null,
    activePanel: null,
});

export default NavigationContext;
