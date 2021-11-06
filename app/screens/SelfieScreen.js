import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,Heading,Flex} from 'native-base';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {user} from './HomeScreen';


const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
	  <View style={styles.container}>
			<View style={{borderWidth:3,borderColor:"red", flexDirection:"row"}}>
				<View style={{borderWidth:3,borderColor:"blue", height:200,width:"50%", justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:3,borderColor:"green", height:200,width:"50%",justifyContent:'center',alignItems: 'center',}}>
					<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
				</View>
			</View>
			
			<View style={{borderWidth:3,borderColor:"red", flexDirection:"row"}}>
				<View style={{borderWidth:3,borderColor:"blue", height:200,width:"34%",justifyContent:'center',alignItems: 'center',}}>
					<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
				</View>
				
				<View style={{borderWidth:3,borderColor:"green", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
				</View>
				
				<View style={{borderWidth:3,borderColor:"black", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
				</View>
			</View>
			
			<View style={{borderWidth:3,borderColor:"black",height:300,justifyContent:'center',alignItems: 'center',}}>
				<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
			</View>
	  </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
	borderWidth:4,
	borderColor:"gold",
},

});
export default LoginScreen;