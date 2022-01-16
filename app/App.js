import * as React from 'react';
import { NativeBaseProvider} from 'native-base';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import TakePhoto from './screens/TakePhoto';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import SelfieScreen from './screens/SelfieScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomDrawer from './components/CustomDrawer';
import CustomTabs from './components/CustomTabs';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function Draw() {
	
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
		headerShown:false, 
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
        },
      }}>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={{
		headerShown:false, 
		tabBarActiveTintColor: '#3040B3',
		}}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cards" color={color} size={27} />),
			}}
		/>
      <Tab.Screen name="Chat" component={ChatScreen} options={{
				tabBarLabel: 'Chat',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chat" color={color} size={27} />),
			}}/>
      <Tab.Screen name="Profile" component={Draw} options={{
				tabBarLabel: 'Profile',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={27} />),
			}}/>
    </Tab.Navigator>
  );
}


export default function App() {
  return (
<NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Tabs}
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
          name="TakePhoto"
          component={TakePhoto}
			options={{headerShown:false}}
        />
		
		<Stack.Screen
          name="ProfileScreen"
          component={Tabs}
		      options={{headerShown:false}}
        />
		
		<Stack.Screen
          name="ChatScreen"
          component={Tabs}
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
