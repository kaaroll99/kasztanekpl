import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
    return (
    <View style={styles.container}>
		<img
			src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png"
			size={"25"}
			alt='avatar'
		/>
		
		<img
			src="https://e7.pngegg.com/pngimages/758/434/png-clipart-computer-icons-conkeror-tango-desktop-project-chestnut-miscellaneous-leaf.png"
			size={"25"}
			alt='kasztan'
		/>
		
		<img
			src="https://toppng.com/uploads/preview/chat-oval-speech-bubbles-symbol-comments-icon-chat-11563300152qpi11esomo.png"
			size={"25"}
			alt='czat'
		/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
	width: 1000,
	flexDirection: 'row',
	justifyContent: 'space-around',
	backgroundColor: 'white',
	padding: 5,
	shadowColor:'red',
	shadowOffset:{width: 0, height: 7},
	shadowOpacity: 0.15,
	shadowRadius: 5.5,
	elevation: 9,
  },
});