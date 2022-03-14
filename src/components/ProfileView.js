import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icons} from '../common';
import styles from './styles';

/*========================================================
 * function Name: ProfileView
 * function Purpose: Show user profile
 * function Parameters: profileImg, name, location,
 * function ReturnType: view
 * function Description: It shows user profile
 *=====================================================*/

const ProfileView = ({profileImg, name, location}) => {
  return (
    <View style={styles.profileview}>
      <Image source={profileImg} style={styles.profileImg} />
      <View style={{marginLeft: 12}}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.locationContainer}>
          <Image source={Icons.locationIcon} style={styles.locationIcon} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileView;
