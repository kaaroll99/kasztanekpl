import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
	  <View style={styles.container}>
		  
		  <View style={styles.block}>
				<TextInput
				  style={styles.TextInput}
				  placeholder="LOGIN"
				  placeholderTextColor="#3040B3"
				  onChangeText={(email) => setEmail(email)}
				/>
		  </View>
		  
		  <View style={styles.block}>
				<TextInput
				  style={styles.TextInput}
				  placeholder="PASSWORD"
				  placeholderTextColor="#3040B3"
				  secureTextEntry={true}
				  onChangeText={(password) => setPassword(password)}
				/>
		  </View>
		  
		  <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
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
  },

  block: {
	borderWidth: 3,
    borderColor: "#3040B3",
    width: "80%",
    height: 65,
	marginTop:20,
    alignItems: "center",
    borderRadius:10,
  },

  TextInput: {
    height: 50,
	width:100,
	textAlign:"center",
    flex: 1,
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