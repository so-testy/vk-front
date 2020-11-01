import React from "react";
import { Provider } from "mobx-react";

import { enableLogging } from 'mobx-logger';
import store from './store'


enableLogging();

export default ({ children }) => {
    return (
        <Provider {...store} >
            {children}
        </Provider>
    )
}