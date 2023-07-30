import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/signup';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/welcome'
import Discover from './components/discover'
import Login from './components/login'
import Chat from './components/chat'
import Error from './components/error'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='discover' component={Discover} options={{ headerShown: false }} />
        <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='chat' component={Chat} options={{}} />
        <Stack.Screen name='emptyscreen' component={Error} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
