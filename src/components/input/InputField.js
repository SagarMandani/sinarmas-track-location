import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Colors} from '../../common';
import styles from './styles';

/*========================================================
 * function Name: InputField
 * function Purpose: Common TextInput component
 * function Parameters: label, customStyle, rightIcon, rightIconOnPress, isError, ...others
 * function ReturnType: view
 * function Description: It used for Common TextInput Component
 *=====================================================*/

const InputField = ({
  label,
  customStyle,
  rightIcon,
  rightIconOnPress,
  isError,
  ...others
}) => {
  return (
    <View
      style={[
        styles.inputRoot,
        {borderColor: isError ? Colors.RED : Colors.DARK_GREY},
      ]}>
      <View style={{width: '90%'}}>
        <Text
          style={[
            styles.inputLabel,
            {color: isError ? Colors.RED : Colors.BLACK},
          ]}>
          {label}
        </Text>
        <TextInput style={styles.input} {...others} />
      </View>
      {rightIcon && (
        <TouchableOpacity onPress={rightIconOnPress}>
          <Image source={rightIcon} style={styles.rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
