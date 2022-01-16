import React, { useState } from "react";
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
	
export const user = [
  { name: "Basia", uri: require('../assets/1.jpg'), location: "Warszawa", age: "27" },
  { name: "Kasia", uri: require('../assets/2.jpg'), location: "Kielce",age: "22"},
  { name: "Karolina", uri: require('../assets/3.jpg'), location: "Kraków",age: "22"},
  { name: "Daniel", uri: require('../assets/44.jpg'),
					uri2: require('../assets/41.jpg'),
					uri3: require('../assets/42.jpg'),
					location: "Górno",age: "21"},
  { name: "Antonia", uri: require('../assets/5.jpg'), location: "Sinsinati",age: "18"},
]

const currentColor = '#3040B3'
const nonColor = 'gray'

const HomeScreen = ({ navigation }) => {
const [exampleChangeUser, setExampleChangeUser] = useState(0);
  return (
    <View style={styles.container}>
		<StatusBar barStyle="dark-content" />
		<View style={styles.container2}>
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
		</View>		
		
		
    </View>
  );
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
	marginTop:"9%",  
	height:"96%",
  } ,
  
  footer:{
	height:"8%",
	width:"100%",
	alignItems: 'center',
	paddingTop:"3%",
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
	marginTop:50,
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
