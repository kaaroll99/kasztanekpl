import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Top from './Top.js';
import Footer from './Footer.js';


export default function Main() {
    return (
    <View style={styles.container}>
      <Image
			source={require('../assets/5.jpg')}
			style={styles.image}
		/>
      <View style={styles.topka}>
		<Top />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
	marginTop: 40,
  backgroundColor: 'black',
	borderColor: "green",
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
  },
  
  topka:{
	  width: "100%",
    position: 'absolute',
  },

  image:{
    width: 395,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }

});