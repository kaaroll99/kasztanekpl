import React, { useState } from "react";
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import Top from '../components/Top.js';

export var exampleChangeUser = 1;


export const user = [
  { name: "Merlin", uri: require('../assets/1.jpeg'), location: "New York", age: "34" },
  { name: "Kasia", uri: require('../assets/2.jpg'), location: "Kielce",age: "22"},
  { name: "Natalia", uri: require('../assets/3.jpg'), location: "Rzeszów",age: "22"},
  { name: "Daniel", uri: require('../assets/4.jpg'), location: "Górno",age: "21"},
  { name: "Antonia", uri: require('../assets/5.jpg'), location: "Sinsinati",age: "18"},
]

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

		<View style={styles.image}>
			<Image 
				source={user[exampleChangeUser].uri}
				style={{ width: 395, height: "100%", borderRadius:20}}
			/>
			<View style={styles.inImage}>
				<View style={styles.nopeButton}>
					<TouchableOpacity onPress={() => exampleChangeUser = 4}>
						<FontAwesome name='times-circle' size={50} color={"red"}/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.yeesButton}>
					<TouchableOpacity >
						<FontAwesome name='heart' size={50} color={"lime"}/>
					</TouchableOpacity>
				</View>
			</View>
		</View>	
		
		<View style={styles.topka}>
			<Top/>
		</View>

		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
			<Image 
				style={styles.kasztanek}
				source={require('../assets/logo-bw.png')}
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
	backgroundColor:"white",
  },
  
  topka:{
	marginTop:50,
	position:"absolute",
	flex:1,
	width:'100%',
	 
  },

  image:{
	marginTop:40,  
	height:670,
  } ,

  obrazek:{
    width: 395,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  
  footer:{
	flex:1,
	height:70,
	width:"100%",
	alignItems: 'flex-end',
	paddingBottom:15,
	flexDirection: "row",
	justifyContent: "space-around",
  },
  
   kasztanek:{
	width: 40,
    height: 40,
    resizeMode: 'stretch'
   },
   
   inImage:{
	borderWidth:2,
	borderColor:"black",
	height:80,
	marginTop:-80,
	flexDirection:"row",
	alignItems: 'center',
    justifyContent: 'space-around',
   },
   
   nopeButton:{
	alignItems: 'center',
    justifyContent: 'space-around',
	borderWidth:2,
	borderColor:"red",
	height:"100%",
   },
   
   yeesButton:{
	alignItems: 'center',
    justifyContent: 'space-around',
	borderWidth:2,
	borderColor:"lime",
	height:"100%",
   }
});

export default HomeScreen;
