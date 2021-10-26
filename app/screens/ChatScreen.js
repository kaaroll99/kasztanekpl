import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ChatScreen() {
    return (
    <View style={styles.container}>
		<Text>Chat Screen</Text>
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