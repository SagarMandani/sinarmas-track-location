import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../common';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    width: wp('100%'),
    height: hp('20%'),
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
  },
  headerImage: {
    width: wp('100%'),
    height: hp('20%'),
  },
  container: {
    width: wp('100%'),
    height: hp('85%'),
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-end',
  },
  LocationStepsHeader: {
    height: 48,
    borderBottomColor: Colors.RED,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.LIGHT_GREY,
  },
  pointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointNumber: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.RED,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  pointText: {
    fontWeight: '500',
    fontSize: 11,
    color: Colors.BLACK,
    marginTop: -10,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  emptyBoxIcon: {
    width: wp('50%'),
    height: hp('18%'),
    resizeMode: 'contain',
  },
  emptyText: {
    fontWeight: '500',
    fontSize: 18,
    color: Colors.DARK_GREY,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  routeStepsView: {
    // height: 300,
    width: '100%',
    borderRadius: 5,
    // padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    marginTop: hp('3%'),
  },
  assignmentText: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 10,
    color: Colors.DARK_GREY_,
    fontSize: 10,
    overflow: 'hidden',
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  timeText: {
    color: Colors.DARK_GREY_,
    fontSize: 10,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  stepView: {
    width: 32, //wp('12%'),
    height: 40, //hp('8%'),
    backgroundColor: Colors.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  stepIcon: {
    width: 13, //wp('5%'),
    height: 13, //hp('6%'),
    resizeMode: 'contain',
  },
  stepViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNameText: {
    color: Colors.DARK_GREY_,
    fontSize: 11,
    fontWeight: '400',
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  stepLocationText: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  hilightedText: {
    color: Colors.BLUE,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 16,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  subText: {
    color: Colors.DARK_GREY_,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 10,
    fontFamily: Fonts.SlateForOnePlusRegular,
  },
  dashedVerticleline: {
    zIndex: 1,
    height: 32,
    alignItems: 'center',
    width: 32,
  },
  buttonContainer: {
    alignItems: 'center',
    borderTopColor: Colors.DARK_GREY,
    borderTopWidth: 0.5,
    marginTop: 24,
  },
  btnContainer: {
    paddingHorizontal: 16,
    width: '100%',
    paddingVertical: 16,
  },
});

export default styles;
