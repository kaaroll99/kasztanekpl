import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity,Alert  } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,CloseIcon,VStack,IconButton} from 'native-base';

export function validAuthorization(log,pass){
	if ((log == 'user' || log == 'User') && (pass == 'password' || pass == 'Password')){
		return true
	}
	else{
		return false
	}		
}

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
	  <View style={styles.container}>
		  
		  <FormControl>
						<Stack mx="4">
						
						  <FormControl.Label>Login</FormControl.Label>
								<Input type="text"  placeholder="Login" onChangeText={(login) => setLogin(login)}/>

						  <FormControl.Label>Password</FormControl.Label>
								<Input type="password"  placeholder="password" onChangeText={(password) => setPassword(password)}
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
			
		  <TouchableOpacity style={styles.loginButton} 
		  onPress={() => validAuthorization(login,password) === true? navigation.navigate('HomeScreen'): showAlert}>
			  {/*Dzialają alerty???????*/}
				<Text style={styles.text_login}>LOGIN</Text>
		  </TouchableOpacity>
	  </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
	borderWidth:4,
	borderColor:"gold",
},

  loginButton: {
  	height: "10%",
	width: "100%",
	backgroundColor: "#3040B3",
	color: 'white',
	alignItems: 'center',
  	justifyContent: 'center',
	marginTop:427,
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  text_login:{
	color: 'white',
	fontSize: 25,
	fontWeight: 'bold',
}
});
export default LoginScreen;