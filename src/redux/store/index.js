import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import {createLogger} from 'redux-logger';
import createApiMiddleware from './ApiMiddleware';
import ApiClient from './ApiClient';
import Config from '../../common/Config';

/*========================================================
 * function Name: createStore
 * function Purpose: call all midddleWare and reducers
 * function Parameters: reducers, midddleWare
 * function ReturnType: store
 * function Description: createStore using midddleWare and reducers
 *=====================================================*/

const apiClient = new ApiClient({baseURL: Config.defaultUrl});
const apiMiddleware = createApiMiddleware(apiClient);

const middleWare = [thunk, apiMiddleware];

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

middleWare.push(loggerMiddleware);

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
