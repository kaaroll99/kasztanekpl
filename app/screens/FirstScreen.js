import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
	<View style={styles.container}>
		<Image
			source={require('../assets/logo-transparent.png')}
			style={styles.logo}
		/>
		
		<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('LoginScreen')}>
			<View >
				<Text style={styles.text_login}>LOG IN</Text>
			</View>	
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.button_register} onPress={() => navigation.navigate('RegisterScreen')}>
			<View >
				<Text style={styles.text_login}>REGISTER</Text>
			</View>	
		</TouchableOpacity>
    </View>
	
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	width: "100%",
	alignItems: 'center',
    justifyContent: 'flex-end',
	backgroundColor: 'rgb(255,255,255)'
  },
  
  logo:{
	marginBottom:300,
	height:250,
	width:250,
	},
	
	button_login:{
	height: "10%",
	width: "49%",
	backgroundColor: "#3040B3",
	color: 'white',
	alignItems: 'center',
    justifyContent: 'center',
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  button_register:{
	height: "10%",
	width: "49%",
	backgroundColor: "#945522",
	color: 'white',
	alignItems: 'center',
    justifyContent: 'center',
	borderTopLeftRadius: 20,
	borderTopRightRadius:20,
  },

  text_login:{
	  color: 'white',
	  fontSize: 25,
	  fontWeight: 'bold',
  }
});

export default FirstScreen;