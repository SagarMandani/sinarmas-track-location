import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors} from '../../common';

/*========================================================
 * function Name: ButtonField
 * function Purpose: Button
 * function Parameters: customStyle, text, isDisable, onPress,
 * function ReturnType: view
 * function Description: It shows a Button
 *=====================================================*/

const ButtonField = ({
  customStyle,
  customTextStyle,
  text,
  isDisable,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisable || false}
      style={[
        styles.btnRoot,
        {backgroundColor: isDisable ? Colors.LIGHT_GREY : Colors.RED},
        customStyle,
      ]}>
      <Text
        style={[
          styles.buttonText,
          {color: isDisable ? Colors.BLACK : Colors.WHITE},
          customTextStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonField;
