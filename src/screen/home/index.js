import React, {useEffect, useState, useRef} from 'react';
import {
  StatusBar,
  ImageBackground,
  ScrollView,
  BackHandler,
  View,
} from 'react-native';
import {Colors, Icons} from '../../common';
import {ProfileView} from '../../components';
import {checkPermision, requestPermisison} from '../../utils/permission';
import LocationStepsView from './LocationStepsView';
import {Assignment} from '../../screen';
import styles from './styles';

/*========================================================
 * function Name: Home
 * function Purpose: Show all available routes & their steps, user profile in header
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It shows available routes & their steps, user profile in header
 *=====================================================*/

const Home = props => {
  const [assignment, setassignment] = useState(null);
  let interval = useRef(null);
  const [showAssignmentModal, setshowAssignmentModal] = useState(false);
  const [startTracking, setstartTracking] = useState(false);

  useEffect(() => {
    if (props?.route?.params && props?.route?.params?.assignment) {
      setassignment(props?.route?.params?.assignment);
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      hadnleBackAction,
    );

    checkPermissionAndRequest();
    startTimer();
    return () => {
      setshowAssignmentModal(false);
      clearInterval(interval?.current);
      return () => backHandler.remove();
    };
  }, []);

  const startTimer = completed => {
    interval.current = setInterval(() => {
      if (!assignment || assignment === null) {
        setshowAssignmentModal(true);
      }
      if (completed === 'completed') {
        setstartTracking(false);
        setshowAssignmentModal(true);
      }
    }, 10000);
  };

  const checkPermissionAndRequest = async () => {
    let permission = await checkPermision('location');
    if (!permission) {
      permission = await requestPermisison('location');
    }
  };

  const hadnleBackAction = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {showAssignmentModal ? (
        <Assignment
          onTimeOut={() => setshowAssignmentModal(false)}
          startTracking={startTracking}
          onAccept={assignment => {
            clearInterval(interval.current);
            setshowAssignmentModal(false);
            setassignment(assignment);
          }}
          onDecline={() => {
            setshowAssignmentModal(false);
          }}
          onComplete={() => {
            setshowAssignmentModal(false);
            setassignment(null);
            startTimer('completed');
          }}
          props={props}
        />
      ) : (
        <View style={{backgroundColor: Colors.WHITE}}>
          <ImageBackground style={styles.header} source={Icons.TopHeaderBg}>
            <ProfileView
              profileImg={Icons.profileImage}
              name={'AKBAR SALIM'}
              location={'Cilincing'}
            />
          </ImageBackground>
          <ScrollView
            style={{
              // paddingBottom: 50,
              backgroundColor: Colors.WHITE,
            }}>
            <LocationStepsView
              navigation={props?.navigation}
              assignment={assignment}
              onStartTracking={() => {
                setstartTracking(true);
                setshowAssignmentModal(true);
                // if (
                //   props?.route?.params &&
                //   props?.route?.params?.startTrackingRoute
                // ) {
                //   let {startTrackingRoute} = props?.route?.params;
                //   startTrackingRoute();
                // }
              }}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Home;
