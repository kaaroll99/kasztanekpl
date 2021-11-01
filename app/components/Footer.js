import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';

const currentColor = 'green'
const nonColor = 'white'

const Footer = ({ navigation }) =>{
    return (
    <View style={styles.container}>
		<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
		<Image 
			style={styles.kasztanek}
			source={require('../assets/logo-transparent.png')}
			size={27}
			/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
				<FontAwesome name='comments' size={35}/>
			</TouchableOpacity>	
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
			<FontAwesome name='user' size={35}/>
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
	backgroundColor:"gray",
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

export default Footer;