import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {Colors, CommonStrings, Icons} from '../../common';
import {ButtonField, StepView} from '../../components';
import styles from './styles';

/*========================================================
 * function Name: LocationStepsView
 * function Purpose: Show Routes & their steps
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It shows available routes & their steps
 *=====================================================*/

const LocationStepsView = ({navigation, assignment, onStartTracking}) => {
  const [isAccepted, setisAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.LocationStepsHeader}>
        <Text>Shift Pagi</Text>
        <View style={styles.pointContainer}>
          <Text style={styles.pointNumber}>14</Text>
          <Text style={styles.pointText}>POINTS</Text>
        </View>
      </View>
      {assignment && assignment?.assignmentId ? (
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.routeStepsView}>
            <View style={styles.timeTopView}>
              <Text style={styles.assignmentText}>ASSIGNMENT ID#288192003</Text>
              <Text style={styles.timeText}>04:20 PM</Text>
            </View>
            <View style={{marginTop: 16, padding: 16}}>
              <StepView
                color={Colors.ORANGE}
                icon={Icons.homeIcon}
                name={'ROM LOCATION'}
                location={'Jakarta Utara'}
              />
              <DashedLine
                axis="vertical"
                dashLength={3}
                dashGap={5}
                dashColor={Colors.DARK_GREY}
                style={styles.dashedVerticleline}
              />
              <StepView
                color={Colors.GREEN}
                icon={Icons.homeIcon}
                name={'WEIGHT POINT'}
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
                icon={Icons.portIcon}
                name={'PORT LOCATION'}
                location={'Pelabuhan Merak'}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.hilightedText}>
                60 Minutes
                <Text style={styles.subText}> remaining to reach port</Text>
              </Text>
              <View style={styles.btnContainer}>
                <ButtonField
                  text={CommonStrings.startTrackingText}
                  onPress={() => {
                    onStartTracking();
                    // navigation?.navigate('Assignment', {
                    //   assignment,
                    // });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.emptyText}>Belum ada Assignment</Text>
            <Image source={Icons.emptyBoxIcon} style={styles.emptyBoxIcon} />
          </View>
        </View>
      )}
    </View>
  );
};

export default LocationStepsView;
