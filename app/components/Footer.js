import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';
import {SCREEN_NAME} from '../App'

const currentColor = 'green'
const nonColor = 'white'
export default function  Footer({selectScreen, currentScreen}){
    return (
    <View style={styles.container}>
		<TouchableOpacity onPress={()=>{
				selectScreen(SCREEN_NAME.PEOPLE)
			}
		}>
      <Image 
		style={styles.kasztanek}
		source={require('../assets/logo-transparent.png')}
		size={27}
		color={
			currentScreen === SCREEN_NAME.PEOPLE ? currentColor : nonColor
			}
		/>
		</TouchableOpacity>
		
		<TouchableOpacity onPress={()=>{
				selectScreen(SCREEN_NAME.CHAT)
			}
			}>
			<FontAwesome name='comments' size={35} color={currentScreen === SCREEN_NAME.CHAT ? currentColor : nonColor}/>
		</TouchableOpacity>
		
		<TouchableOpacity onPress={()=>{
				selectScreen(SCREEN_NAME.PROFILE)
			}
			}>
			<FontAwesome name='user' size={35} color={currentScreen === SCREEN_NAME.PROFILE ? currentColor : nonColor}/>
		</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	zIndex:2,
	width: "100%",
	flexDirection: "row",
	backgroundColor:"gray",
	borderWidth:3,
	justifyContent: "space-around",
	paddingTop: 20,
	shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
		elevation:9,
  },
  
  kasztanek:{
	width: 40,
    height: 40,
    resizeMode: 'stretch',  
  },
});