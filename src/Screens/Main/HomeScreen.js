import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Home
      </Text>
    </View>
  );
};

export default HomeScreen;
