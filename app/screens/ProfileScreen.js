import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
    return (
    <View style={styles.container}>
		<Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems: 'center',
    justifyContent: 'center',
  },
});