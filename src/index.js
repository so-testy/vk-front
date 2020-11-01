import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import StoreProvider from './StoreProvider';

// Init VK  Mini App
bridge.send('VKWebAppInit');

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    import('./eruda').then(({ default: eruda }) => { }); //runtime download
}
