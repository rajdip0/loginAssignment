import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const HomeScreen = (props) => {
    return (
        <View
            style={{
                flex: 1,
                // backgroundColor: "red",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <TouchableOpacity
                onPress={() => props.navigation.navigate('LoginScreen')}
            >

                <View
                    style={{

                        backgroundColor: 'blue',
                        height: 20,
                        width: 20
                    }}

                ></View>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
