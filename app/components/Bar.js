import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function  Bar({selectScreen, currentScreen}){
    return (
    <View style={styles.container}>
			<View style={styles.logowanie}>
				<Text>LOG IN</Text>
			</View>	
			<View style={styles.rejestracja}>
				<Text>REGISTER</Text>
	
			</View>	
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	width: "100%",
	flexDirection: "row",
	borderWidth: 5,
	borderColor: "none",
	justifyContent: "space-around",
  },
  
  logowanie:{
	height: "100%",
	width: "50%",
	borderWidth:2,
	borderColor: "blue",
	alignItems: 'center',
    justifyContent: 'center',
  },
  
  rejestracja:{
	height: "100%",
	width: "50%",
	borderWidth:2,
	borderColor: "red",
	alignItems: 'center',
    justifyContent: 'center',
  },
});