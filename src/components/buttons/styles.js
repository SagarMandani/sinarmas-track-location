import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../common';

const styles = StyleSheet.create({
  root: {},
  btnRoot: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: Colors.RED,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    // fontFamily: Fonts.POPPINS_REGULAR,
  },
  socialButtonText: {
    textAlign: 'center',
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    // fontFamily: Fonts.POPPINS_REGULAR,
  },
  socialBtn: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.LIGHT_GREY,
  },
  leftIcon: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
});

export default styles;
