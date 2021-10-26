import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Top from './Top.js';
import Footer from './Footer.js';

export default function Main() {
    return (
    <View style={styles.container}>
      <View style={styles.topka}>
		<Top />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	width: "100%",
	marginTop: 40,
    backgroundColor: 'red',
	borderWidth: 5,
	borderColor: "green",
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
  },
  
  topka:{
	  width: "100%",  
  },
});