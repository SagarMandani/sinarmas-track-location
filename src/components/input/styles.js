import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../common';

const styles = StyleSheet.create({
  root: {},
  inputmask: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.LIGHT_GREY,
    // borderLeftWidth: 1,
    borderLeftColor: Colors.LIGHT_GREY,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  phoneContainer: {
    // width: '100%',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderWidth: 1,
    width: '20%',
    backgroundColor: Colors.LIGHT_GREY,
  },
  phoneTitle: {
    color: Colors.BLACK,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    // fontFamily: Fonts.POPPINS_REGULAR,
  },
  phoneInput: {
    height: 50,
    backgroundColor: Colors.LIGHT_GREY,
    color: Colors.BLACK,
    width: 0,
  },
  formattedView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 10,
    borderColor: Colors.LIGHT_GREY,
    // borderWidth: 1,
  },
  inputRoot: {
    width: '100%',
    marginTop: 24,
    height: 60,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.DARK_GREY,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    fontSize: 14,
    paddingVertical: 2,
    marginTop: 5,
    paddingHorizontal: 0,
    color: Colors.BLACK,
  },
  inputLabel: {
    color: Colors.BLACK,
    fontSize: 11,
    fontWeight: '400',
  },
  rightIcon: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
  },
});

export default styles;
