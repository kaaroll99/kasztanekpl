import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView,} from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {user, userLove} from './HomeScreen';

const currentColor = '#3040B3'
const nonColor = 'black'

const ChatScreen = ({ navigation }) => {
	
  return (
<NativeBaseProvider>
    <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.main}>

		</View>

		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
			<MaterialCommunityIcons name='cards' size={30}
				color={'gray'}/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
				<FontAwesome name='comments' size={30}
				color={currentColor}/>
			</TouchableOpacity>	
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
				<FontAwesome name='user' size={30} color={'gray'}/>
			</TouchableOpacity>
			</View>
		</View>
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
      
   main:{
	borderWidth:1,
	borderColor:"#3040B3",
	height:605,
	justifyContent:'center',
	alignItems: 'center',
	borderBottomLeftRadius:20,
	borderBottomRightRadius:20,
   },
});

export default ChatScreen;