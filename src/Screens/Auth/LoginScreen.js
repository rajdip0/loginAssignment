import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, TextInput, View } from 'react-native'
import Lottie from 'lottie-react-native';
import Colors from '../../themes/Colors';
import ProgressButton from '../../components/ProgressButton';
const LoginScreen = () => {
    return (

        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
            >


                <View
                    style={{
                        backgroundColor: Colors.Main,
                        flex: 1,


                        alignContent: 'center',
                        // justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: 200,
                            height: 200,
                            alignSelf: 'center'
                        }}
                    >

                        <Lottie source={require('../../assets/lottie/login.json')} autoPlay loop />

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
                            marginTop: 100


                        }}
                    >

                        <TextInput
                            placeholder='Phone Number'
                            placeholderTextColor={"black"}
                            style={{
                                marginLeft: 20,
                                width: 300

                            }}
                            keyboardType={'numeric'}


                        />
                    </View>


                    <ProgressButton />




                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default LoginScreen
