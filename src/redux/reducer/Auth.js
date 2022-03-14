import React from 'react';
import * as types from '../ActionType';

/*========================================================
 * function Name: Auth.js
 * function Purpose: method of reducer
 * function Parameters: initial state, action
 * function ReturnType: onLoadStart, onLoadEnd, onSuccess, onError
 * function Description: action will match & call particular case in Auth.js reducer
 *=====================================================*/

const initialState = {
  authLoading: false,
  user: null,
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {...state, user: action.payload};
    case types.AUTH_FAIL:
      return {
        ...state,
        user: action.payload,
        authLoading: false,
      };
    default:
      return {...state};
  }
}
