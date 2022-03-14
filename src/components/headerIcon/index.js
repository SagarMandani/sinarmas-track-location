import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

/*========================================================
 * function Name: HeaderIcon
 * function Purpose: Show logo image in top
 * function Parameters: image, customStyle,
 * function ReturnType: view
 * function Description: It shows logo image in top
 *=====================================================*/

const HeaderIcon = ({image, customStyle}) => {
  return (
    <View style={styles.root}>
      <Image source={image} style={[styles.headerImg, customStyle]} />
    </View>
  );
};

export default HeaderIcon;
