import React, {useState, useEffect} from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button} from 'native-base';
import {user, userLove} from '../screens/HomeScreen';
const CustomDrawer = props => {
	const [show2,setShow2] = useState('dziala?');
  return (
    <View style={{flex: 1}} >
        <DrawerContentScrollView{...props}contentContainerStyle={{backgroundImage: 'White'}}>
			<ImageBackground
				  source={require('../assets/bg.jpg')}
				  style={{height:2000}}>
			</ImageBackground>
        </DrawerContentScrollView>		
    </View>
	
  );
};

export default CustomDrawer;