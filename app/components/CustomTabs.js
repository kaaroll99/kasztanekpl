import React, {useState} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet,View,Text,ImageBackground,Image,TouchableOpacity,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const currentColor = '#3040B3'
const nonColor = 'gray'

const CustomTabs =({ navigation }) => {
  return (
    <View>
        <View style={styles.footer}>
			<View style={styles.footer_button}>
				<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
					<MaterialCommunityIcons name='cards' size={30} color={'black'}/>
					<Text>Home</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.footer_button}>
				<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
					<FontAwesome name='comments' size={30} color={'black'}/>
					<Text>Chat</Text>
				</TouchableOpacity>	
			</View>

			<View style={styles.footer_button}>
				<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
					<FontAwesome name='user' size={30} color={'black'}/>
					<Text>profile</Text>
				</TouchableOpacity>
			</View>
		</View>		
    </View>
	
  );
};
const styles = StyleSheet.create({
footer:{
	width:"100%",
	flexDirection: "row",
	justifyContent: "space-around",
	borderWidth: 5,
	padding:7,
  },
});
export default CustomTabs;