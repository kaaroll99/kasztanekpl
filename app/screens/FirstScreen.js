import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (

	<View style={styles.container}>
		<StatusBar barStyle="dark-content" backgroundColor="white"/>
		<View style={styles.container2}>
		<Image
			source={require('../assets/logo-transparent.png')}
			style={styles.logo}
		/>
		</View>
		<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('LoginScreen')}>
			<View >
				<Text style={styles.text_login}>LOGIN</Text>
			</View>	
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.button_register} onPress={() => navigation.navigate('RegisterScreen')}>
			<View >
				<Text style={styles.text_login}>REGISTER</Text>
			</View>	
		</TouchableOpacity>
		
    </View>
	
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
	backgroundColor: 'rgb(255,255,255)',
  },
  
  logo:{
		marginBottom:355,
		marginTop:100,
		height:250,
		width:250,
	},

	container2:{
		width:"100%",
		height:"90%",
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	button_login:{
		height: "10%",
		width: "50%",
		backgroundColor: "#3040B3",
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopLeftRadius: 20,
		borderTopRightRadius:20,
  },

  button_register:{
		height: "10%",
		width: "50%",
		backgroundColor: "#83BF28",
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