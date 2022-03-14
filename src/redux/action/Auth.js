import {Alert} from 'react-native';
import {apiRequest} from '../store/ApiMiddleware';
import * as types from '../ActionType';
import {Constants, Strings} from '../../common';

/*========================================================
 * function Name: Auth.js
 * function Purpose: method of action
 * function Parameters: url, method, body, onLoadStart, onLoadEnd, onSuccess, onError using api calling
 * function ReturnType: onLoadStart, onLoadEnd, onSuccess, onError
 * function Description: api calling using method of action in Auth.js
 *=====================================================*/

export const authSuccessData = payload => {
  return {type: types.AUTH_SUCCESS, payload};
};

export const authFail = payload => {
  return {type: types.AUTH_FAIL, payload};
};

export const incrementAuthLoading = () => {
  return {type: types.AUTH_LOADING, payload: true};
};

export const decrementAuthLoading = () => {
  return {type: types.AUTH_LOADING, payload: false};
};

// login
export const onLogin = (user, navigation) => {
  return apiRequest({
    url: '/',
    method: 'POST',
    body: user,
    onLoadStart: incrementAuthLoading,
    onLoadEnd: decrementAuthLoading,
    onSuccess: payload => {
      return async dispatch => {};
    },
    onError: payload => {
      return dispatch => {};
    },
  });
};
