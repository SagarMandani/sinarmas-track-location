import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../common';
import styles from './styles';

// Heading Lable
export const HadingLabel = ({text, customStyles}) => {
  return (
    <View style={[styles.heading, customStyles]}>
      <Text style={styles.loginText}>{text}</Text>
    </View>
  );
};

// Subheading Lable
export const SubHadingLabel = ({text, customStyles}) => {
  return <Text style={styles.loginWelcomeText}>{text}</Text>;
};
