import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Colors from '../../themes/Colors';
import AnimatedLoginButton from '../../components/AnimatedLoginButton';
import {useDispatch, useSelector} from 'react-redux';

import Toast from '../../utils/Toast';
import connectionrequest from '../../utils/NetInfo';
import {loginRequest} from '../../redux/reducer/AuthReducer';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            backgroundColor: Colors.Main,
            flex: 1,

            alignContent: 'center',
            // justifyContent: 'center'
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}>
            <Lottie
              source={require('../../assets/lottie/login.json')}
              autoPlay
              loop
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: 300,
              backgroundColor: Colors.Text,
              borderRadius: 20,
              height: 40,
              marginTop: 100,
              borderColor: '#00008B',
              borderWidth: 1,
            }}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={'black'}
              style={{
                marginLeft: 20,
                width: 300,
              }}
              keyboardType={'numeric'}
              onChangeText={t => setNumber(t)}
            />
          </View>

          <AnimatedLoginButton
            backgroundColor={'red'}
            width={100}
            textColor="white"
            title={'Login'}
            borderColor={'#00008B'}
            borderWidth={1}
            alignSelf={'center'}
            marginTop={30}
            onPress={() => {
              if (number == '') {
                Toast('Please enter phone number');
              } else if (number.length != 10) {
                Toast('Please enter vaild phone number');
              } else {
                connectionrequest()
                  .then(() => {
                    dispatch(loginRequest(number));
                  })
                  .catch(err => {
                    console.log(err);
                    Toast('Please connect to internet');
                  });
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
