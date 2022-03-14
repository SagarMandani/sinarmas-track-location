import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import MapDirectionView from './MapDirectionView';
import AssignmentAcceptDecline from './AssignmentAcceptDecline';
import {checkPermision, requestPermisison} from '../../utils/permission';
import {StackActions} from '@react-navigation/native';
import styles from './styles';
/*========================================================
 * function Name: Assignment
 * function Purpose: Show Assignment details & Drection in google map
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It shows Assignment details & Drection in google map
 *=====================================================*/

const Assignment = ({
  onAccept,
  onDecline,
  startTracking,
  onComplete,
  onTimeOut,
  props,
}) => {
  let interval = useRef(null);

  const [isAccepted, setisAccepted] = useState(false);
  const [assignment, setiassignment] = useState();
  const [showAssignmentModal, setshowAssignmentModal] = useState(true);
  // const [startTracking, setstartTracking] = useState(false);
  const [currentStatus, setcurrentStatus] = useState(0);

  useEffect(() => {
    // checkPermissionAndRequest();
    // interval.current = setInterval(() => {
    //   if (!isAccepted) {
    //     setshowAssignmentModal(true);
    //   }
    // }, 10000);
    // return () => {
    //   setshowAssignmentModal(false);
    //   clearInterval(interval.current);
    // };
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <MapDirectionView
          route={props?.route}
          navigation={props?.navigation}
          currentStatus={currentStatus}
          onComplete={onComplete}
        />
        {/* {showAssignmentModal && ( */}
        <AssignmentAcceptDecline
          navigation={props?.navigation}
          // assignmentData={assignment}
          onTimeOut={onTimeOut}
          getCurrentStatus={status => setcurrentStatus(status)}
          onDecline={() => onDecline()}
          onAccept={assignment => {
            onAccept(assignment);
          }}
          startTracking={startTracking}
          onComplete={() => onComplete()}
        />
        {/* )} */}
      </View>
    </SafeAreaView>
  );
};

export default Assignment;
