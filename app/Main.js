import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Main() {
    return (
    <View style={styles.container}>
		<img 
			src="https://ocdn.eu/pulscms-transforms/1/pgBktkpTURBXy9iNTExMjEwNjU5ZjY5NjE4MmMxMGI0ZWVhZThjNzhhZi5qcGeSlQMAH80D6M0CMpMFzQOYzQH0"
			alt="Kobieta"
		/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
	width: 1000,
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'silver',
	paddingTop: 5,
	marginTop:15,
  },
});