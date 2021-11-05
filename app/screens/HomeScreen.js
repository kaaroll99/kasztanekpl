import React, { useState } from "react";
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
	
export const user = [
  { name: "Merlin", uri: require('../assets/1.jpeg'), location: "New York", age: "34" },
  { name: "Kasia", uri: require('../assets/2.jpg'), location: "Kielce",age: "22"},
  { name: "Natalia", uri: require('../assets/3.jpg'), location: "Rzeszów",age: "22"},
  { name: "Daniel", uri: require('../assets/4.jpg'), location: "Górno",age: "21"},
  { name: "Antonia", uri: require('../assets/5.jpg'), location: "Sinsinati",age: "18"},
]

export const userLove = []

const currentColor = '#3040B3'
const nonColor = 'red'

const HomeScreen = ({ navigation }) => {
const [exampleChangeUser, setExampleChangeUser] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
		<StatusBar style="auto" />
		<View style={styles.inImageTop}>
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
		<View style={styles.image}>
			<Image 
				source={user[exampleChangeUser].uri}
				style={{ width: "100%", height: "100%", borderRadius:20}}
			/>
			
			<View style={styles.inImage}>
				<View style={styles.nopeButton}>
					<TouchableOpacity onPress={() =>
						exampleChangeUser === 4 ? setExampleChangeUser(0) : setExampleChangeUser(exampleChangeUser+1)
					}>
						<FontAwesome name='close' size={60} color={"red"}/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.yeesButton}>
					<TouchableOpacity onPress={() => 
						exampleChangeUser === 4 ? setExampleChangeUser(0) : setExampleChangeUser(exampleChangeUser+1)
					}>
						<FontAwesome name='heart' size={50} color={"lime"}/>
					</TouchableOpacity>
				</View>
			</View>
		</View>	


		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
				<MaterialCommunityIcons name='cards' 
				size={35}
				color={navigation.navigate === 'HomeScreen' ? nonColor : currentColor}
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

  image:{
	marginTop:40,  
	height:700,
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
	height:80,
	marginTop:-80,
	flexDirection:"row",
    justifyContent: 'space-around',
   },
   
   nopeButton:{
	alignItems: 'center',
    justifyContent: 'space-around',
	height:"100%",
   },
   
   yeesButton:{
	alignItems: 'center',
    justifyContent: 'space-around',
	height:"100%",
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
  
  inImageTop:{
	position:'absolute',
	marginTop:90,
	zIndex:1,
	width:'100%',
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

export default HomeScreen;
