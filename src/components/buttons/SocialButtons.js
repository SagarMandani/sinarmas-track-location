import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const SocialButtons = ({icon, text, customStyle}) => {
  return (
    <TouchableOpacity style={[styles.socialBtn, customStyle]}>
      <Image source={icon} style={styles.leftIcon} />
      <Text style={styles.socialButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButtons;
