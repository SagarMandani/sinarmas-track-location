import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../common';
import styles from './styles';

const TopHeader = ({onPressLeftIcon, onPressRightIcon}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.hederIconBg} onPress={onPressLeftIcon}>
        <Image source={Icons.backleftIcon} style={styles.headerIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.hederIconBg} onPress={onPressRightIcon}>
        <Image source={Icons.UnionIcon} style={styles.headerRightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
