import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  root: {
    // paddingVertical: 20,
    marginLeft: 20,
    marginTop: hp('8%'),
  },
  headerImg: {
    width: 120, //wp('30%'),
    height: hp('3%'),
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
});

export default styles;
