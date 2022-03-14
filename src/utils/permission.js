import React from 'react';
import {Alert, Platform} from 'react-native';
import {
  check,
  checkMultiple,
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
  openSettings,
} from 'react-native-permissions';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import {CommonStrings} from '../common';

//check permission
export async function checkPermision(permissionName) {
  let result;
  if (permissionName === 'location') {
    result = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS ||
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
  } else if (permissionName === 'camera') {
    result = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
  }
  try {
    if (result === RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error in permission');
  }
}

//request permissions
export const requestPermisison = async permissionName => {
  return new Promise((resolve, reject) => {
    let permission = false;
    if (permissionName === 'location') {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ).then(status => {
        if (status === RESULTS.GRANTED) {
          resolve(permission);
        } else {
          request(
            Platform.OS === 'ios'
              ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
              : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ).then(status2 => {
            if (status2 === RESULTS.GRANTED) {
              resolve(permission);
            } else {
              resolve(false);
            }
          });
        }
      });
    } else if (permissionName === 'camera') {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA,
      ).then(status2 => {
        if (status2 === RESULTS.GRANTED) {
          resolve(permission);
        } else {
          resolve(false);
        }
      });
    }
  });
};

export const openPermissionSettings = () => {
  Alert.alert(
    CommonStrings.app_name,
    'Please grant all required permissions from settings',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          openSettings();
        },
      },
    ],
    {cancelable: false},
  );
};

// check permission  GPS location
export const enableGeoLocation = () => {
  return new Promise((resolve, reject) => {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message:
        '<h2>Use Location?</h2> \
                  This app wants to change your device settings:<br/><br/>\
                  Use GPS for location<br/><br/>',
      ok: 'YES',
      cancel: 'NO',
    })
      .then(() => {
        resolve(success);
      })
      .catch(error => {
        reject(error.message);
        console.log('==LocationServicesDialogBox Error===', error.message); // error.message => "disabled"
      });
  });
};
