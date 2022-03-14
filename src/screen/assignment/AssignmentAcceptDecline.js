import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {Colors, CommonStrings, Icons} from '../../common';
import {ButtonField, StatusView, StepView} from '../../components';
import DashedLine from 'react-native-dashed-line';
import CountDown from 'react-native-countdown-component';
import styles from './styles';

/*========================================================
 * function Name: AssignmentAcceptDecline
 * function Purpose: Show assignment accept & decline view
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It shows assignment accept & decline view
 *=====================================================*/

let assign = {
  assignmentId: 288192003,
  time: '04:20 PM',
  romLocation: 'Jakarta Utara',
  weightLocation: 'Cilincing No.24',
  portLocation: 'Pelabuhan Merak',
};

const AssignmentAcceptDecline = ({
  navigation,
  onDecline,
  onAccept,
  onTimeOut,
  startTracking,
  getCurrentStatus,
  onComplete,
  // assignmentData,
}) => {
  //References
  const countdownRef = useRef();
  //Local States
  const [acceptStatus, setacceptStatus] = useState(false);
  const [countdown, setCountdown] = useState(true);
  const [status, setstatus] = useState(0); //0,1,2,3,4
  const [assignment, setassignment] = useState(assign);
  const [isstartedTracking, setIsstartedTracking] = useState(false);

  useEffect(() => {
    if (startTracking) {
      setIsstartedTracking(true);
      setstatus(1);
    }
  }, []);

  return (
    <View style={styles.acceptdeclineView}>
      <View style={styles.assignTxt}>
        <Text
          style={[
            styles.assignmentTitle,
            {color: assignment ? Colors.DARK_GREY_ : Colors.BLACK},
          ]}>
          {isstartedTracking
            ? 'ASSIGNMENT ID#' + assignment?.assignmentId
            : 'New Assignment'}
        </Text>
        {isstartedTracking && (
          <View style={styles.headerTimeView}>
            <CountDown
              ref={ref => (countdownRef.current = ref)}
              until={100}
              size={15}
              onChange={value => {
                if (value == 90) {
                  setstatus(status + 1);
                  getCurrentStatus(status + 1);
                } else if (value == 80) {
                  setstatus(status + 1);
                  getCurrentStatus(status + 1);
                } else if (value == 70) {
                  setstatus(status + 1);
                  getCurrentStatus(status + 1);
                } else if (value == 60) {
                  setstatus(status + 1);
                  getCurrentStatus(status + 1);
                }
              }}
              onFinish={() => setCountdown(false)}
              digitStyle={{
                backgroundColor: 'transparent',
                width: 25,
              }}
              digitTxtStyle={{color: Colors.BLUE}}
              separatorStyle={{color: Colors.BLUE, marginBottom: 5}}
              showSeparator
              timeToShow={['M', 'S']}
              timeLabels={{m: '', s: ''}}
            />
            <Text style={[styles.assignmentTitle, {color: Colors.DARK_GREY_}]}>
              {' '}
              remaining
            </Text>
          </View>
        )}
      </View>
      {isstartedTracking && (
        <View
          style={[
            styles.stepsView,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <View style={{padding: 16, width: '77%'}}>
            <StepView
              color={status > 0 ? Colors.ORANGE : Colors.LIGHT_GREY}
              icon={Icons.homeIcon}
              name={'ROM LOCATION'}
              location={'Cilincing No.24'}
            />
            <DashedLine
              axis="vertical"
              dashLength={3}
              dashGap={5}
              dashColor={Colors.DARK_GREY}
              style={styles.dashedVerticleline}
            />
            <StepView
              color={status > 1 ? Colors.GREEN : Colors.LIGHT_GREY}
              icon={Icons.homeIcon}
              name={'WEIGHT POINT'}
              location={'Pelabuhan Merak'}
            />
            <DashedLine
              axis="vertical"
              dashLength={3}
              dashGap={5}
              dashColor={Colors.DARK_GREY}
              style={styles.dashedVerticleline}
            />
            <StepView
              color={status > 2 ? Colors.BLUE : Colors.LIGHT_GREY}
              icon={Icons.portIcon}
              name={'PORT LOCATION'}
              location={'Pelabuhan Merak ' + status}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingVertical: 20,
              width: '23%',
              backgroundColor: Colors.WHITE,
              alignItems: 'flex-end',
              paddingRight: 16,
            }}>
            {status >= 1 ? (
              <StatusView
                text={status > 1 ? 'Done' : 'Arrived'}
                isOutline={status > 1 ? true : false}
              />
            ) : (
              <View style={{width: 80, height: 32}} />
            )}
            {status >= 2 ? (
              <StatusView
                text={status > 2 ? 'Done' : 'Arrived'}
                isOutline={status > 2 ? true : false}
              />
            ) : (
              <View style={{width: 80, height: 32}} />
            )}
            {status >= 3 ? (
              <StatusView
                text={status > 3 ? 'Done' : 'Arrived'}
                isOutline={status > 3 ? true : false}
              />
            ) : (
              <View style={{width: 80, height: 32}} />
            )}
          </View>
        </View>
      )}
      {!isstartedTracking && (
        <View style={styles.stepsView}>
          <View style={{padding: 16}}>
            <StepView
              color={Colors.GREEN}
              icon={Icons.homeIcon}
              name={'ROM LOCATION'}
              location={'Cilincing No.24'}
            />
            <DashedLine
              axis="vertical"
              dashLength={3}
              dashGap={5}
              dashColor={Colors.DARK_GREY}
              style={styles.dashedVerticleline}
            />
            <StepView
              color={Colors.BLUE}
              icon={Icons.homeIcon}
              name={'PORT LOCATION'}
              location={'Pelabuhan Merak'}
            />
          </View>
        </View>
      )}
      {isstartedTracking && (
        <View style={styles.buttonContainer}>
          <ButtonField
            text={CommonStrings.completeText}
            customStyle={{marginTop: 16, alignSelf: 'flex-end'}}
            isDisable={status >= 4 ? false : true}
            onPress={() => {
              onComplete();
              // setstatus(status + 1);
            }}
          />
        </View>
      )}
      {!isstartedTracking && (
        <View style={styles.buttonContainer}>
          <View style={styles.acceptTimer}>
            <Text style={styles.remainingTimeText}>
              Time remaining to accept{' '}
            </Text>
            <CountDown
              ref={ref => (countdownRef.current = ref)}
              until={10}
              size={15}
              onFinish={() => {
                setCountdown(false);
                onTimeOut();
              }}
              digitStyle={{
                backgroundColor: 'transparent',
                width: 25,
              }}
              digitTxtStyle={{color: Colors.RED}}
              separatorStyle={{color: Colors.RED, marginBottom: 5}}
              showSeparator
              timeToShow={['M', 'S']}
              timeLabels={{m: '', s: ''}}
            />
          </View>
          <View style={styles.buttonView}>
            <View style={{width: '48%'}}>
              <ButtonField
                text={CommonStrings.declineText}
                customStyle={styles.outlineBtn}
                customTextStyle={{color: Colors.BLACK}}
                onPress={() => {
                  setacceptStatus(false);
                  onDecline();
                }}
              />
            </View>
            <View style={{width: '48%'}}>
              <ButtonField
                text={CommonStrings.acceptText}
                customStyle={{marginTop: 16}}
                onPress={() => {
                  setassignment(assign);
                  setstatus(status + 1);
                  onAccept(assign);
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default AssignmentAcceptDecline;
