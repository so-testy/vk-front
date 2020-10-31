import React from 'react';

const NavigationContext = React.createContext({
    activeView: null,
    activePanel: null,
    activeModal: null,
    updateRoute: () => {},
    routeProps: {},
});

export default NavigationContext;
