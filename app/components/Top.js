import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function  Top(){
    return (
    <View style={styles.container}>
		<Text>
			Imie Nazwisko,wiek
		</Text>
		
		<Text>
			Lokalizacja
		</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
	width: "100%",
	justifyContent: "space-around",
	padding: 15,
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
  },
});