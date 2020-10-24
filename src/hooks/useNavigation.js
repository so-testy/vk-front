import React, { useContext } from 'react';
import NavigationContext from '../NavigationContext';

const useNavigation = route => {
    const { updateRoute } = useContext(NavigationContext);

    return props => updateRoute({ ...route, props });
};

export default useNavigation;
