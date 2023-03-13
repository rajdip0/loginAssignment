import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/Main/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/Auth/LoginScreen';
import OTPScreen from '../Screens/Auth/OTPScreen';

const Stack = createNativeStackNavigator();
function StackNavigation() {


    const screens = {
        LoginScreen: LoginScreen,
        OTPScreen: OTPScreen,
        HomeScreen: HomeScreen,

    }


    return (

        <NavigationContainer>
            <Stack.Navigator
                headerMode={'none'}
                screenOptions={{
                    headerShown: false,
                }}
            >
                {Object.entries({ ...screens }).map(([name, component]) => {

                    return (<Stack.Screen key={name} name={name} component={component} />)
                })}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation