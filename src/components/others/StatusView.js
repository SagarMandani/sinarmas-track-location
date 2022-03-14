import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../common';
import styles from './styles';

const StatusView = ({customStyle, text, isOutline}) => {
  return (
    <View style={isOutline ? styles.statusViewOutline : styles.statusView}>
      <Text
        style={[
          styles.statusText,
          {color: isOutline ? Colors.GREEN : Colors.WHITE},
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default StatusView;
