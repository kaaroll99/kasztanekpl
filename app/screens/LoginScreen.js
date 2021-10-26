import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BAR from '../components/Bar.js';

export default function LoginScreen() {
    return (
    <View style={styles.container}>
		<Image
			source={require('../assets/logo.png')}
			style={styles.logo}
		/>
			<BAR/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	width: "100%",
	alignItems: 'center',
    justifyContent: 'center',
	backgroundColor: 'rgb(216,151,145)'
  },
  
  logo:{
		height:100,
		width:100,
	},
});