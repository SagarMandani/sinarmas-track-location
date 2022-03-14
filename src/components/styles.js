import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../common';
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
  locationIcon: {
    width: 8,
    height: 10,
  },
  profileview: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderColor: Colors.BLUE,
    borderRadius: 20,
    borderWidth: 2,
  },
  nameText: {
    fontSize: 13,
    color: Colors.WHITE,
    fontWeight: '700',
  },
  locationText: {
    fontSize: 13,
    color: Colors.WHITE,
    fontWeight: '500',
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default styles;
