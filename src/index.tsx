import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import {store} from 'stores'
import {App} from 'components';
import * as serviceWorker from './serviceWorker';
import 'styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
