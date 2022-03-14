import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Alert, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import {Colors, Constants, Icons} from '../../common';
import {TopHeader} from '../../components';
import styles from './styles';
import {enableGeoLocation} from '../../utils/permission';

/*========================================================
 * function Name: MapDirectionView
 * function Purpose: Show Map with Direction & Top header Icons
 * function Parameters: route, navigation,
 * function ReturnType: view
 * function Description: It shows Map with Direction & Top header Icons
 *=====================================================*/

const startPoints = {
  latitude: 21.1702,
  longitude: 72.8311,
};
const weightPoints = {
  latitude: 20.3893,
  longitude: 72.9106,
};
const endPoints = {
  latitude: 19.076,
  longitude: 72.8777,
};

const ASPECT_RATIO = Constants.deviceWidth / Constants.deviceHeight;
const LATITUDE = 21.1702;
const LONGITUDE = 72.8311;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const coordinates = [startPoints, endPoints];

const MapDirectionView = ({route, navigation, onComplete, currentStatus}) => {
  const mapView = React.useRef();

  const [streetName, setStreetName] = React.useState('');

  const [fromLocation, setFromLocation] = React.useState({
    latitude: currentStatus > 1 ? weightPoints.latitude : startPoints.latitude,
    longitude:
      currentStatus > 1 ? weightPoints.longitude : startPoints.longitude,
    latitudeDelta: Math.abs(startPoints.latitude - endPoints.latitude) * 2,
    longitudeDelta: Math.abs(startPoints.longitude - endPoints.longitude) * 2,
  });
  const [toLocation, setToLocation] = React.useState({
    latitude: endPoints.latitude,
    longitude: endPoints.longitude,
    latitudeDelta: Math.abs(endPoints.latitude - startPoints.latitude) * 2,
    longitudeDelta: Math.abs(endPoints.longitude - startPoints.longitude) * 2,
  });
  // const [region, setRegion] = React.useState({
  //   latitude: startPoints.latitude,
  //   longitude: startPoints.longitude,
  //   latitudeDelta: Math.abs(startPoints.latitude - endPoints.latitude) * 2,
  //   longitudeDelta: Math.abs(startPoints.longitude - endPoints.longitude) * 2,
  // });

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  useEffect(() => {
    // let {sourceLatLng, currentLocation} = route.params;
    // let fromLoc = currentLocation.gps;
    // let toLoc = sourceLatLng.location;
    // let street = currentLocation.streetName;
    // let mapRegion = {
    //   latitude: (fromLoc.latitude + toLoc.latitude) / 2,
    //   longitude: (fromLoc.longitude + toLoc.longitude) / 2,
    //   latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
    //   longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    // };
    // setStreetName(street);
    // setFromLocation(fromLoc);
    // setToLocation(toLoc);
    // setRegion(mapRegion);
    // Geolocation.requestAuthorization();
    if (Platform.OS === 'android') {
      enableGeoLocation();
    }
  }, []);

  const getCurrentLoc = () => {
    Geolocation.getCurrentPosition(
      position => {
        if (position) {
          let {coords} = position;
          setFromLocation({
            latitude: coords?.latitude,
            longitude: coords?.longitude,
            latitudeDelta: Math.abs(coords?.latitude - endPoints.latitude) * 2,
            longitudeDelta:
              Math.abs(coords?.longitude - endPoints.longitude) * 2,
          });
        }
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  function calculateAngle(coordinates) {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  //Render destination marker
  const destinationMarker = toLocation => {
    return (
      <Marker coordinate={toLocation}>
        <Image
          source={Icons.PortPin}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
          }}
        />
      </Marker>
    );
  };

  //Render source marker
  const sourceMarkerIcon = (fromLocation, currentStatus) => (
    <Marker
      coordinate={currentStatus > 1 ? weightPoints : fromLocation}
      anchor={{x: 0.5, y: 0.9}}
      flat={true}
      rotation={angle}>
      <Image
        source={currentStatus >= 1 ? Icons.HomePin : Icons.HomePinOrange}
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
      />
    </Marker>
  );

  return (
    <View
      style={{
        flex: 1,
        ...StyleSheet.absoluteFill,
        backgroundColor: Colors.WHITE,
      }}>
      <TopHeader
        onPressLeftIcon={() => {
          onComplete();
          // navigation?.navigate('Home');
        }}
        onPressRightIcon={() => {
          getCurrentLoc();
        }}
      />
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        maxZoomLevel={7}
        // initialRegion={region}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{
          ...StyleSheet.absoluteFill,
          width: Constants.deviceWidth,
          height: Constants.deviceHeight,
        }}>
        {coordinates.length >= 2 && (
          <MapViewDirections
            origin={currentStatus > 1 ? weightPoints : startPoints}
            destination={endPoints}
            // origin={coordinates[0]}
            waypoints={
              coordinates.length > 2 ? coordinates.slice(1, -1) : undefined
            }
            // destination={coordinates[coordinates.length - 1]}
            apikey={Constants.googleMapApi}
            strokeWidth={5}
            strokeColor={Colors.BLUE}
            optimizeWaypoints={true}
            onReady={result => {
              // setDuration(result.duration);
              // if (!isReady) {
              //   // Fit route into maps
              //   mapView.current.fitToCoordinates(result.coordinates, {
              //     edgePadding: {
              //       right: 200 / 20,
              //       bottom: 200 / 4,
              //       left: 200 / 20,
              //       top: 200 / 8,
              //     },
              //   });
              //   // Reposition the car
              //   let nextLoc = {
              //     latitude: result.coordinates[0]['latitude'],
              //     longitude: result.coordinates[0]['longitude'],
              //   };
              //   if (result.coordinates.length >= 2) {
              //     let angle = calculateAngle(result.coordinates);
              //     setAngle(angle);
              //   }
              //   setFromLocation(nextLoc);
              //   setIsReady(true);
              // }
            }}
          />
        )}
        {toLocation?.latitude &&
          toLocation?.longitude &&
          destinationMarker(toLocation)}
        {fromLocation?.latitude &&
          fromLocation?.longitude &&
          sourceMarkerIcon(fromLocation, currentStatus)}
      </MapView>
    </View>
  );
};

export default MapDirectionView;
