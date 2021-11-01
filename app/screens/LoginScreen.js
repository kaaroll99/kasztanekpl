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
				  placeholder="Login"
				  placeholderTextColor="black"
				  onChangeText={(email) => setEmail(email)}
				/>
		  </View>
		  
		  <View style={styles.block}>
				<TextInput
				  style={styles.TextInput}
				  placeholder="Password."
				  placeholderTextColor="black"
				  secureTextEntry={true}
				  onChangeText={(password) => setPassword(password)}
				/>
		  </View>
		  
		  <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
				<Text>LOGIN</Text>
		  </TouchableOpacity>
	  </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  block: {
	borderWidth: 3,
    borderColor: "red",
    width: "70%",
    height: 45,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
  },

  loginButton: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderWidth: 3,
    borderColor: "green",
  },
});
export default LoginScreen;