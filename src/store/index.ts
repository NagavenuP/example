
import {
    applyMiddleware, compose, createStore, Middleware
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promise-middleware';
import immutableToJS from './../utils/immutable-to-js';

import { utility } from '../utils/index';
import { logger } from '../utils/logger';
import Reducer, { IAppStore } from './../reducers/index';
const reduxLogger = createLogger({
    collapsed: true,
    stateTransformer: (state: any) => {
        return immutableToJS(state);
    }
});

declare const __DEV__: boolean; // from webpack

function configureStore(initialState: any) {
    const _store = createStore(
        Reducer,
        __DEV__
            ? window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']() // this will enable redux dev toos extension in browser
            : initialState,
        compose(
            applyMiddleware(..._getMiddleware())));

    _enableHotLoader(_store);
    return _store;
}

function _getMiddleware(): Middleware[] {
    let middleware = [
        promiseMiddleware,
        thunk

    ];

    if (__DEV__) {
        middleware = [...middleware, reduxLogger];
    }

    return middleware;
}

function _enableHotLoader(_store: any) {
    if (!__DEV__) {
        return;
    }

    const { hot } = module as any;
    if (hot) {
        hot.accept('./../reducers', () => {
            const nextRootReducer = require('./../reducers');
            _store.replaceReducer(nextRootReducer);
        });
    }
}

export const store: {
    dispatch: any,
    getState: () => IAppStore
    subscribe: any;
} = configureStore({});

export const persistStore = require('redux-persist').persistStore;

export function initReduxStore(cb) {
    persistStore(store, {}, (err: any, state: any) => {
        if (err) {
        } else {
            cb();
        }
    });
}

// Listen to store changes and wanr user if offline storage is used abovce 4 MB
// After JSON stringify each char in string will occupy 1 byte space. Verified by exporing complete store to json file
store.subscribe(function () {
    // retrieve latest store state here
    // Ex:
    try {
        let storeSize = (JSON.stringify(store.getState()).length / 1000000);
        if (storeSize > 4) {
            utility.alert({ message: 'Low offline storage space. Please go online to free space.' });
            logger.debug(`Store size is ${storeSize} Mega Bytes`, storeSize);
        }
        //  logger.info(`Store size is ${storeSize} Mega Bytes`, storeSize);

    } catch (e) {
        // Exception occurs when circular reference is present in store.
        utility.alert({ message: 'Very low offline storage space. Please go online to free space.' });
    }
});
