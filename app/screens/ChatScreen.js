import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';
import {user, userLove} from './HomeScreen';

const currentColor = 'yellow'
const nonColor = 'white'


const ChatScreen = ({ navigation }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const {isOpen2, onOpen, onClose } = useDisclose()
  return (
<NativeBaseProvider>
    <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.main}>
		
		</View>

	
	
	
	
	
	
	
	
	
	
	
	
	
	{/*--------------------------------------FOOTER--------------------------------------
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
		</View>*/}
    </SafeAreaView>
</NativeBaseProvider>
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
	alignItems: 'center',
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
   },
      
   main:{
	borderWidth:3,
	borderColor:"green",
	height:"90%",
	justifyContent:'center',
	alignItems: 'center',
	zIndex:1,
   },
});

export default ChatScreen;