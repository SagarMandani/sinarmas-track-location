import React, {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView, Alert} from 'react-native';
import {Icons, CommonStrings} from '../../common';
import {ButtonField, HeaderIcon, InputField, Label} from '../../components';
import {validateEmail} from '../../utils/helper';
import styles from './styles';

/*========================================================
 * function Name: Login
 * function Purpose: User login
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It shows a login interface for user
 *=====================================================*/

const Login = props => {
  //Local states
  const [email, setEmail] = useState(''); //abcd@gmail.com
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(''); //123455678
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  // validation & login method
  const onLogin = () => {
    let errorMessage = '';
    if (!email || email.length <= 0) {
      errorMessage = CommonStrings.emailEmptyMessage;
    } else if (!validateEmail(email)) {
      errorMessage = CommonStrings.emailValidationMessage;
    } else if (!password || password.length <= 0) {
      errorMessage = CommonStrings.passwordEmptyMessage;
    }
    if (errorMessage !== '') {
      Alert.alert(CommonStrings.app_name, errorMessage);
    } else {
      props.navigation.navigate('Home');
      // props.navigation.navigate('Assignment');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <HeaderIcon image={Icons.SinarmasLogo} />
      <Label.HadingLabel
        text={CommonStrings.loginToAccountText}
        customStyles={{marginTop: 24}}
      />
      <View style={styles.container}>
        <View>
          <InputField
            value={email}
            keyboardType="email-address"
            onChangeText={email => {
              setEmail(email);
              setEmailError(false);
            }}
            label={'EMAIL ADDRESS'}
            onFocus={() => {
              if (email && email?.length > 0) {
                setEmailError(false);
              } else {
                setEmailError(true);
              }
            }}
            onBlur={() => setEmailError(false)}
            isError={emailError}
            onEndEditing={() =>
              email?.length > 0 && password?.length > 0
                ? setEnableButton(true)
                : setEnableButton(false)
            }
          />
          <InputField
            value={password}
            onChangeText={password => {
              setPassword(password);
              setPasswordError(false);
            }}
            label={'PASSWORD'}
            rightIcon={passwordSecure ? Icons.eyeviewIcon : Icons.eyehiddenIcon}
            onFocus={() => {
              if (password && password?.length > 0) {
                setPasswordError(false);
              } else {
                setPasswordError(true);
              }
            }}
            onBlur={() => setPasswordError(false)}
            isError={passwordError}
            secureTextEntry={passwordSecure}
            rightIconOnPress={() => setPasswordSecure(!passwordSecure)}
            onEndEditing={() =>
              email?.length > 0 && password?.length > 0
                ? setEnableButton(true)
                : setEnableButton(false)
            }
          />
        </View>
        <View style={{paddingBottom: 20}}>
          <ButtonField
            text={CommonStrings.btnLoginText}
            customStyle={{marginTop: 16}}
            isDisable={!enableButton}
            onPress={onLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
