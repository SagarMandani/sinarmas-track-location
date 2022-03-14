import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Constants, Fonts} from '../../common';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.WHITE,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  acceptdeclineView: {
    width: '100%',
    height: 380,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-end',
  },
  assignmentTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.BLACK,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  stepsView: {
    // height: 50,
    width: '100%',
    borderTopColor: Colors.DARK_GREY,
    borderTopWidth: 0.5,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: hp('5%'),
  },
  assignTxt: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
  },
  dashedVerticleline: {
    zIndex: 1,
    height: 32,
    alignItems: 'center',
    width: 32,
  },
  remainingTimeText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.DARK_GREY_,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.RED,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 16,
    borderTopColor: Colors.DARK_GREY,
    borderTopWidth: 0.5,
    paddingTop: 16,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  outlineBtn: {
    marginTop: 16,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.DARK_GREY,
    borderWidth: 0.5,
  },
  timeRemainingText: {
    color: Colors.BLUE,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  acceptTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  markerView: {
    height: 38,
    width: 38,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  headerTimeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
