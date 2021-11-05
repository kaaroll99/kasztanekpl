import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,Heading,Flex} from 'native-base';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
	  <View style={styles.container}>
			<Heading mx="auto" style={styles.headingi}>pierwszy</Heading>
		    <Flex  direction="row" justify="space-evenly">
				<Heading  style={styles.headingi}>
					<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
				</Heading>
				<Heading  style={styles.headingi}>
					<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
				</Heading>
			</Flex>
			<Heading mx="auto" style={styles.headingi}>
				<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
			</Heading>
			<Heading mx="auto" style={styles.headingi}>
				<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
			</Heading>
			<Flex mx="3" direction="row" justify="space-evenly">
				<Heading  style={styles.headingi}>
					<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
				</Heading>
				<Heading  style={styles.headingi}>
					<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
				</Heading>
				<Heading  style={styles.headingi}>
					<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
				</Heading>
			</Flex>
			<Heading mx="auto" style={styles.headingi}>
				<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
			</Heading>
			<Heading mx="auto" style={styles.headingi}>
				<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
					</Text>
			</Heading>
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

  headingi: {
	borderWidth:4,
	borderColor:"red",
	width:"100%",
	padding:10,
	justifyContent:'center',
	alignItems: 'center',
},
});
export default LoginScreen;