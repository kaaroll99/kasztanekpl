import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button} from 'native-base';
import {user, userLove} from '../screens/HomeScreen';
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}} >
        <DrawerContentScrollView{...props}contentContainerStyle={{backgroundImage: 'White'}}>
			<ImageBackground
				  source={require('../assets/bg.jpg')}
				  style={{height:2000}}>
			
		<Box p="40px" color="white" mt="4" rounded="md" >
					<HStack space={2}>
							<Avatar size="xl" source={user[0].uri} >Zdjecie</Avatar>
							<Text>{user[0].name}</Text>
					</HStack>
					
					<HStack space={2} style={{marginTop:25}}>
							<Avatar size="xl" source={user[1].uri} >Zdjecie</Avatar>
							<Text>{user[1].name}</Text>
					</HStack>
					
					<HStack space={2} style={{marginTop:25}}>
							<Avatar size="xl" source={user[2].uri} >Zdjecie</Avatar>
							<Text>{user[2].name}</Text>
					</HStack>
					
					<HStack space={2} style={{marginTop:25}}>
							<Avatar size="xl" source={user[3].uri} >Zdjecie</Avatar>
							<Text>{user[3].name}</Text>
					</HStack>
					
					<HStack space={2} style={{marginTop:25}}>
							<Avatar size="xl" source={user[4].uri} >Zdjecie</Avatar>
							<Text>{user[4].name}</Text>
					</HStack>
					
					<HStack space={2} style={{marginTop:25}}>
							<Avatar size="xl" source={user[0].uri} >Zdjecie</Avatar>
							<Text>{user[0].name}</Text>
					</HStack>
				</Box>
		</ImageBackground>
        </DrawerContentScrollView>		
    </View>
	
  );
};

export default CustomDrawer;