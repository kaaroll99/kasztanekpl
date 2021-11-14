import React, { useState } from "react";
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Modal,FormControl,Input,Center,Button,TextArea,Divider} from 'native-base';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const SettingsScreen = ({ navigation }) => {
	
  return (
 <NativeBaseProvider>
   <SafeAreaView style={styles.container}>
		<Text></Text>
   </SafeAreaView>
</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	alignItems: 'center',
  	justifyContent: 'center',
  },
});

export default SettingsScreen;