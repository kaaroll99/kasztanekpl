import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const currentColor = 'yellow'
const nonColor = 'white'

const ChatScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
				<FontAwesome name='home' size={35}/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
				<FontAwesome name='comments' size={35}
				color={navigation.navigate === 'ChatScreen' ? nonColor :currentColor 
				}/>
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

export default ChatScreen;