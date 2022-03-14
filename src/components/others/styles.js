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
  stepViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNameText: {
    color: Colors.DARK_GREY_,
    fontSize: 11,
    fontWeight: '400',
  },
  stepLocationText: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
  },
  stepNameText: {
    color: Colors.DARK_GREY_,
    fontSize: 11,
    fontWeight: '400',
  },
  stepLocationText: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
  },
  stepIcon: {
    width: 13, //wp('5%'),
    height: 13, //hp('6%'),
    resizeMode: 'contain',
  },
  stepView: {
    width: 32, //wp('12%'),
    height: 40, //hp('8%'),
    backgroundColor: Colors.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  statusView: {
    width: 80,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
  },
  statusViewOutline: {
    width: 80,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GREEN,
    borderWidth: 0.5,
    backgroundColor: Colors.WHITE,
  },
  statusText: {
    color: Colors.WHITE,
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    zIndex: 1,
    top: 35,
  },
  hederIconBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    width: 8,
    height: 12,
    resizeMode: 'contain',
  },
  headerRightIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});

export default styles;
