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
				style={{ width: 395, height: "100%", borderRadius:20}}
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
   }
});

export default HomeScreen;