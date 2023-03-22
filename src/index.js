import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';
// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();
render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>, 
    document.getElementById('app')
);