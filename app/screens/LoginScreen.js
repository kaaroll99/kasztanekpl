import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BAR from '../components/Bar.js';

export default function LoginScreen() {
    return (
    <View style={styles.container}>
		<Image
			source={require('../assets/logo-transparent.png')}
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
    justifyContent: 'flex-end',
	backgroundColor: 'rgb(255,255,255)'
  },
  
  logo:{
	marginBottom:300,
	height:250,
	width:250,
	},
});