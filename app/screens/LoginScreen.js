import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity,Alert  } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,CloseIcon,VStack,IconButton} from 'native-base';
import axios from 'axios';
import {AdresURL} from '../App.js';


const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const LoginScreen = ({ navigation }) => {
	const [login, setLogin] = useState(false);
	const [password, setPassword] = useState(false);
	const [show, setShow] = React.useState(false);
	const [screen, setScreen] = React.useState(false);
    const handleClick = () => setShow(!show);
	const [user,setUser] = useState([]);
	const [id,setId] = useState(false);
	
	
	function validAuthorization(log,pass){
		
		var i = 0;
		while(i != user.length){
			if ((log == user[i].user) && (pass == user[i].pass)){
				console.log(user[i].user);
					try {
					 axios({
						method: 'post',
						url: AdresURL+'/Session',
						data: {
							activeUser: user[i].id - 1,
							activeUserToChangeValue: user[i].id,
						}
					}).then(function (response) {console.log(response.data)});
					} catch(error) {
						console.error(error)
					}
				console.log(user[i].id)
				console.log(log)
				return true
			}else{
				console.log("i = ",i);
				i++;
			}
		}
	}
	
	const getData = async () => {
    try {
      const response = await axios.get(AdresURL+'/Account').then((response) => {setUser(response.data)});
    } catch(error) {
      console.error(error)
	}
  }
	
	useEffect(() => {
		getData();
	}, [])
  return (
    
	  <View style={styles.container}>
		<View style={styles.container2}>
				  
		  <FormControl>
						<Stack mx="4">
						
						  <FormControl.Label>Login</FormControl.Label>
								<Input style={styles.input} type="text"  placeholder="Login" onChangeText={(login) => setLogin(login)}/>

						  <FormControl.Label>Password</FormControl.Label>
								<Input style={styles.input} type="password"  placeholder="password" onChangeText={(password) => setPassword(password)}
								type={show ? "text" : "password"}
								overflow="visible"
								InputRightElement={
								<Button size="xs" m="1" onPress={handleClick}>
								  {show ? "Hide" : "Show"}
								</Button>
								}
								/>
								
						</Stack>
			</FormControl>

			
			</View>
		  <TouchableOpacity style={styles.loginButton} 
		  onPress={() => validAuthorization(login,password) === true? navigation.navigate('HomeScreen'): showAlert}>
			  {/*Dzialają alerty???????*/}
				<Text style={styles.text_login}>LOGIN</Text>
		  </TouchableOpacity>

		
	  </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
},

container2:{
	width:"100%",
	height:"90%",
	alignItems: 'center',
	justifyContent: 'center',
},

  loginButton: {
  	height: "10%",
	width: "100%",
	backgroundColor: "#3040B3",
	color: 'white',
	alignItems: 'center',
  	justifyContent: 'center',
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  back_button: {
	width:"100%",
	height:"10%"
},

  text_login:{
	color: 'white',
	fontSize: 25,
	fontWeight: 'bold',
  },

  input:{
	height:50,
  },

});
export default LoginScreen;