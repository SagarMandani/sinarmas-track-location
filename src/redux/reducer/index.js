import React from 'react';
import {combineReducers} from 'redux';
import Auth from './Auth';

/*========================================================
 * function Name: rootReducer
 * function Purpose: combine reducers
 * function Parameters: ,
 * function ReturnType: reducers
 * function Description: It combines all reducer for configure with store
 *=====================================================*/

const rootReducer = combineReducers({
  auth: Auth,
});
export default rootReducer;
