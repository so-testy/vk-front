import React, { useContext } from 'react';

const NavigationContext = React.createContext({
    activeView: null,
    activePanel: null,
    activeModal: null,
    updateRoute: () => {},
});

export default NavigationContext;
