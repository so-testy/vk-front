import React, { useContext } from 'react';
import NavigationContext from '../NavigationContext';

const useNavigation = route => {
    const { updateRoute } = useContext(NavigationContext);

    return () => updateRoute(route);
};

export default useNavigation;
