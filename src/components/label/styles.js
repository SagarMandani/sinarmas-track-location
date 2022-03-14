import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
    paddingHorizontal: 24,
  },
  loginText: {
    fontSize: 32,
    fontWeight: '700',
    // fontFamily: Fonts.POPPINS_REGULAR,
    // textAlign: 'center',
    paddingLeft: 10,
    color: Colors.TEXT_BLACK,
  },
  loginWelcomeText: {
    fontSize: 14,
    // fontFamily: Fonts.POPPINS_REGULAR,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.TEXT_BLACK,
  },
  heading: {
    borderLeftColor: Colors.RED,
    borderLeftWidth: 5,
  },
});

export default styles;
