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
    // paddingHorizontal: 24,
  },
  loginText: {
    fontSize: hp('3%'),
    fontFamily: Fonts.SlateForOnePlusRegular,
    textAlign: 'center',
    color: Colors.TEXT_BLACK,
  },
  loginWelcomeText: {
    fontSize: 14,
    fontFamily: Fonts.SlateForOnePlusRegular,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.TEXT_BLACK,
  },
  divider: {
    borderBottomColor: '#DFE2E6',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 32,
  },
  dividerText: {
    textAlign: 'center',
    marginBottom: -10,
    backgroundColor: 'white',
    width: 30,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
    fontFamily: Fonts.SlateForOnePlusRegular,
    textAlign: 'center',
    marginTop: 24,
    color: Colors.TEXT_BLACK,
    height: 48,
  },
  linkText: {
    fontSize: 16,
    fontFamily: Fonts.SlateForOnePlusRegular,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.BLUE_DARK,
  },
  container: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default styles;
