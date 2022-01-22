import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {Spinner, HStack,Heading,Center,NativeBaseProvider,} from "native-base"
import {FontAwesome} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {AdresURL} from '../App.js';
import axios from 'axios';
	

const currentColor = '#3040B3'
const nonColor = 'gray'

const HomeScreen = ({ navigation, route }) => {
	
const [exampleChangeUser, setExampleChangeUser] = useState(0);
const [girl,setGirl] = useState([]);
const [flaga,setFlaga] = useState(false);

const getData = async () => {
    try {
		  const response = await axios.get(AdresURL+'/Girlfriend').then((response) => {setGirl(response.data)});
		  setFlaga(true)
    } catch(error) {
      console.error(error)
	}
  }
	
	useEffect(() => {
		getData();
	}, [])
console.log(flaga)

	if(flaga == true){

	  return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.container2}>
			<StatusBar style="auto" />
			<View style={styles.inImageTop}>
					<Text style={styles.text_name}>
						{girl[exampleChangeUser].name}, {girl[exampleChangeUser].age}
					</Text>
			
					<Text style={styles.text_loc}>
						<EvilIcons name="location" size={24} color="white" />
						<Text>
							{girl[exampleChangeUser].location}
						</Text>
					</Text>
				</View>
			<View style={styles.image}>
				<Image 
					source={girl[exampleChangeUser].picture}
					style={{ width: "100%", height: "100%", borderRadius:20}}
				/>
				
				<View style={styles.inImage}>
					<View style={styles.nopeButton}>
						<TouchableOpacity onPress={() =>
							exampleChangeUser === girl.length-1 ? setExampleChangeUser(0) : setExampleChangeUser(exampleChangeUser+1)
						}>
							<FontAwesome name='close' size={60} color={"#FE4E4E"}/>
						</TouchableOpacity>
					</View>
					
					<View style={styles.yeesButton}>
						<TouchableOpacity onPress={() => 
							exampleChangeUser === girl.length-1 ? setExampleChangeUser(0) : setExampleChangeUser(exampleChangeUser+1)
						}>
							<FontAwesome name='heart' size={50} color={"#A6FF4D"}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>	
			</View>		
			
			
		</View>
	  );
	}else{
	return(
		<View style={styles.loader}>
			<HStack space={2} alignItems="center">
				<Spinner accessibilityLabel="Loading posts" color="#3040B3" size="lg" />
				<Heading color="#3040B3" fontSize="lg">Loading</Heading>
			</HStack>
		</View>
	)
}
}
const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor:"white",
  },

  container2:{
	width:"100%",
	height:"90%",
},


  image:{
	marginTop:"10%",
	height:"100%",
	  shadowColor: "#000",
	  shadowOffset: {width: 0, height: 4,},
	  shadowOpacity: 0.8,
	  shadowRadius: 7,
	  elevation: 10,
  } ,
  
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
	   shadowColor: "#000",
	   shadowOffset: {width: 4, height: 4,},
	   shadowOpacity: 1,
	   shadowRadius: 15,
	   elevation: 10,
   },
   
   yeesButton:{
	alignItems: 'center',
    justifyContent: 'space-around',
	height:"100%",
	   shadowColor: "#000",
	   shadowOffset: {width: 4, height: 4,},
	   shadowOpacity: 1,
	   shadowRadius: 15,
	   elevation: 10,
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
	marginTop:50,
	zIndex:1,
	width:'100%',
  },
  
  loader:{
	flex:1,
	alignItems: 'center',
    justifyContent: 'center',
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
