


import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

const ProgressButton = () => {
    const animation = useRef(new Animated.Value(0)).current;
    const [opacity, setOpacity] = useState(new Animated.Value(1));

    const handlePress = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        });
    };

    const animatedStyles = {
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200],
                }),
            },
            {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                }),
            },
        ],
        opacity: opacity,
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Get it!</Text>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.box, animatedStyles]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#e6537d',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
        paddingVertical: 10,
        overflow: 'hidden',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        backgroundColor: 'transparent',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
    },
});

export default ProgressButton;
