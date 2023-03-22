import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import OtpAutoFillViewManager from 'react-native-otp-auto-fill';
import {useDispatch, useSelector} from 'react-redux';
import {verifyOTPRequest} from '../../redux/reducer/AuthReducer';
import connectionrequest from '../../utils/NetInfo';
import Toast from '../../utils/Toast';
let status = '';

const OTPScreen = props => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);

  const handleComplete = ({nativeEvent: {code}}) => {
    connectionrequest()
      .then(() => {
        dispatch(verifyOTPRequest({otp: code}));
      })
      .catch(err => {
        console.log(err);
        Toast('Please connect to internet');
      });
  };

  // This is only needed once to get the Android Signature key for SMS body
  const handleOnAndroidSignature = ({nativeEvent: {code}}) => {
    console.log('Android Signature Key for SMS body:', code);
  };

  if (status === '' || AuthReducer.status !== status) {
    switch (AuthReducer.status) {
      case 'Auth/verifyOTPRequest':
        status = AuthReducer.status;
        break;
      case 'Auth/verifyOTPSuccess':
        status = AuthReducer.status;
        Alert.alert('OTP verified successfully');
        props.navigation.navigate('HomeScreen');
        break;

      case 'Auth/verifyOTPFailure':
        status = AuthReducer.status;
        Toast(AuthReducer?.error?.message);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 50,
        }}>
        Enter OTP
      </Text>
      <OtpAutoFillViewManager
        onComplete={handleComplete}
        onAndroidSignature={handleOnAndroidSignature}
        style={styles.box}
        length={6} // Define the length of OTP code. This is a must.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  box: {
    width: 300,
    height: 55,
    // color: '#ffff',

    // borderColor: 'red',
    // backgroundColor: 'blue',
    borderWidth: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OTPScreen;
