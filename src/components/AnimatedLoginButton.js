import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


import PropTypes from 'prop-types';


export default function Button(props) {
  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        {
          height: props.height,
          width: props.width,
          borderRadius: props.borderRadius,
          backgroundColor: props.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: props.alignSelf,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          marginHorizontal: props.marginHorizontal,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          opacity: props.opacity,
        },
        props?.shadow == true
          ? {
            shadowColor: '#aaa',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5.84,
            elevation: 5,
          }
          : null,
      ]}
      onPress={() => {
        onPress();
      }}>
      {props.children && props.children != '' ? (
        props.children
      ) : (
        <Text
          style={{
            color: props.textColor,
            fontSize: props.fontSize,
            fontFamily: props.fontFamily,
            marginTop: props.textMarginTop,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  title: PropTypes.string,
  onPress: PropTypes.func,
  alignSelf: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginHorizontal: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  fontFamily: PropTypes.string,
  opacity: PropTypes.number,
  shadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  height: 45,
  // backgroundColor: Colors.white,
  borderRadius: 100,
  textColor: "white",
  fontSize: 16,
  title: '',
  onPress: null,
  alignSelf: null,
  marginTop: 0,
  marginBottom: 0,
  marginHorizontal: 0,
  width: 0,
  borderColor: '',
  borderWidth: 0,
  fontFamily: null,
  opacity: 1,
  shadow: false,
  disabled: false,
};
