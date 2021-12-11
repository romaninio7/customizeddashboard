import {combineReducers, createStore} from 'redux';

import controllerReducer from './controller/controllerReducers';
import widgetReducers from "./widget/widgetReducers";

const rootReducer = combineReducers({
    controller: controllerReducer,
    widget: widgetReducers,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
