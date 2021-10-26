import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function  Top(){
    return (
    <View style={styles.container}>
		<Text style={styles.text_name}>
			Daniel, 21
		</Text>
		
		<Text style={styles.text_loc}>
		<EvilIcons name="location" size={24} color="white" />
			Górno
		</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	width: "100%",
	justifyContent: "space-around",
	padding: 15,
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
  },

  text_name:{
	fontSize:30,
	color: 'white',
	textShadowOffset: {width:0, height:0},
	textShadowColor: 'black',
	textShadowRadius: 10,
	paddingBottom: 10,
	  
  },

  text_loc:{
	fontSize:20,
	fontWeight: 'bold',
	paddingTop:10,
	color: 'white',
	textShadowOffset: {width:0, height:0},
	textShadowColor: 'black',
	textShadowRadius: 10,
},
});