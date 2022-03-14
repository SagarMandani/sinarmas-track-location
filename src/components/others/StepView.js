import React from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../common';
import styles from './styles';

const StepView = ({color, icon, name, location}) => {
  return (
    <View style={styles.stepViewContainer}>
      <View style={[styles.stepView, {backgroundColor: color}]}>
        <Image
          source={icon}
          style={[
            styles.stepIcon,
            color === Colors.LIGHT_GREY && {tintColor: Colors.BLACK},
          ]}
        />
      </View>
      <View style={{marginLeft: 16}}>
        <Text style={styles.stepNameText}>{name}</Text>
        <Text style={styles.stepLocationText}>{location}</Text>
      </View>
    </View>
  );
};

export default StepView;
