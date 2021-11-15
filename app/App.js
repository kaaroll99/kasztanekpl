import * as React from 'react';
import { NativeBaseProvider} from 'native-base';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import SelfieScreen from './screens/SelfieScreen';
import SettingsScreen from './screens/SettingsScreen';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';

const Stack = createStackNavigator();

export default function App() {
  return (
<NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown:false}}
        />
		
		<Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register', headerBackTitle:'Back'}}
        />
		
		<Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login', headerBackTitle:'Back'}}
        />
		
		<Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
		      options={{headerShown:false}}
        />
		
		<Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
		      options={{headerShown:false}}
        />
		
		<Stack.Screen
          name="SelfieScreen"
          component={SelfieScreen}
          options={{ title: 'Selfie', headerBackTitle:'Back'}}
        />
		
		<Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: 'Settings', headerBackTitle:'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
