import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import BAR from './components/Bar.js';
import kasztanki from './screens/kasztanki.js';
import ChatScreen from './screens/ChatScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import LoginScreen from './screens/LoginScreen.js';

export const SCREEN_NAME = {
	PEOPLE: 'Main',
	PROFILE: 'ProfileScreen',
	CHAT: 'ChatScreen',
	LOGIN: 'LoginScreen',
}
export default function App() {
	const [currentScreen, setCurrnetScreen] = useState(SCREEN_NAME.PEOPLE)
    return (
    <View style={styles.container}>
		{currentScreen === SCREEN_NAME.LOGIN && <LoginScreen />}
		{currentScreen === SCREEN_NAME.PEOPLE && <Main />}
		{currentScreen === SCREEN_NAME.PROFILE && <ProfileScreen />}
		{currentScreen === SCREEN_NAME.CHAT && <ChatScreen />}
		<Footer selectScreen={setCurrnetScreen} currentScreen={currentScreen}/>

    </View>
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