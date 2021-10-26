import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';
import {SCREEN_NAME} from '../App'

const currentColor = '#3040B3'
const nonColor = 'black'
export default function  Footer({selectScreen, currentScreen}){
    return (
    <View style={styles.container}>
		<View style={styles.footer_button}>
			<TouchableOpacity onPress={()=>{
					selectScreen(SCREEN_NAME.PEOPLE)
				}
			}>
		<Image 
			source={require('../assets/logo-bw.png')}
			style={styles.kasztanek}
			size={27}
			color={
				currentScreen === SCREEN_NAME.PEOPLE ? currentColor : nonColor
				}
			/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={()=>{
					selectScreen(SCREEN_NAME.CHAT)
				}
				}>
				<FontAwesome name='comments' size={35} color={currentScreen === SCREEN_NAME.CHAT ? currentColor : nonColor}/>
			</TouchableOpacity>	
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={()=>{
				selectScreen(SCREEN_NAME.PROFILE)
			}
			}>
			<FontAwesome name='user' size={35} color={currentScreen === SCREEN_NAME.PROFILE ? currentColor : nonColor}/>
		</TouchableOpacity>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	zIndex:2,
	width: "100%",
	flexDirection: "row",
	backgroundColor: 'white',
	justifyContent: "space-around",
	paddingTop: 20,
  },
  
  kasztanek:{
	width: 40,
    height: 40,
    resizeMode: 'stretch',  
  },
  footer_button:{
	 borderRadius:5, 
  }
});