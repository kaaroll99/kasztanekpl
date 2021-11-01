import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import Top from '../components/Top.js';
import Footer from '../components/Footer.js';

const user = [
  { id: "1", uri: require('../assets/1.jpeg') },
  { id: "2", uri: require('../assets/2.jpg') },
  { id: "3", uri: require('../assets/3.jpg') },
  { id: "4", uri: require('../assets/4.jpg') },
  { id: "5", uri: require('../assets/5.jpg') },
]

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
		<View style={styles.image}>
			<Image 
				source={user[4].uri}
				style={{ width: 395, height: "100%"}}
			/>
		</View>	
		
			<View style={styles.topka}>
				<Top/>
			</View>
				
		<View style={styles.footer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
  
  topka:{
	flex:1,
	borderWidth:3,
	borderColor: "red",
	position:'absolute',
	width:'100%',
	 
  },

  image:{
	  flex:2,
	  borderWidth:3,
	  borderColor: "green",
  } ,
  
  footer:{
	height:80,
	justifyContent:'flex-end',
	alignItems: 'flex-end',
	flex:3,
	borderWidth:3,
	borderColor: "blue",
	flexDirection: "row",
	backgroundColor:"gray",
	justifyContent: "space-around",
  },
  
   kasztanek:{
	width: 40,
    height: 40,
    resizeMode: 'stretch'
   }
});

export default HomeScreen;