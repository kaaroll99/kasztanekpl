import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function  Bar({selectScreen, currentScreen}){
    return (
    <View style={styles.container}>
			<View style={styles.button_login}>
				<Text style={styles.text_login}>LOG IN</Text>
			</View>	
			<View style={styles.button_register}>
				<Text style={styles.text_login}>REGISTER</Text>
	
			</View>	
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	width: "100%",
	flexDirection: "row",
	justifyContent: "space-around",
  },
  
  button_login:{
	height: "100%",
	width: "49%",
	backgroundColor: "#3040B3",
	color: 'white',
	alignItems: 'center',
    justifyContent: 'center',
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  button_register:{
	height: "100%",
	width: "49%",
	backgroundColor: "#945522",
	color: 'white',
	alignItems: 'center',
    justifyContent: 'center',
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  text_login:{
	  color: 'white',
	  fontSize: 25,
	  fontWeight: 'bold',
  }
});