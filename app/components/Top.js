import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import {user, exampleChangeUser} from '../screens/HomeScreen';


export default function  Top(){
    return (
    <View style={styles.container}>
		<Text style={styles.text_name}>
			{user[exampleChangeUser].name}, {user[exampleChangeUser].age}
		</Text>
		
		<Text style={styles.text_loc}>
		<EvilIcons name="location" size={24} color="white" />
			<Text>
				{user[exampleChangeUser].location}
			</Text>
		</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
	width: "100%",
	flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  text_name:{
	fontSize:27,
	width:"100%",
	color: 'white',
	textShadowOffset: {width:0, height:0},
	textShadowColor: 'black',
	textShadowRadius: 10,
	paddingBottom: 7,
	paddingLeft:10,
	textAlign:"left",
	
	  
  },

  text_loc:{
	fontSize:20,
	width:"100%",
	fontWeight: 'bold',
	paddingLeft:10,
	color: 'white',
	textShadowOffset: {width:0, height:0},
	textShadowColor: 'black',
	textShadowRadius: 10,
	textAlign:"left",
},
});