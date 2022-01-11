import React, { useState, useEffect  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,Heading,Flex,Menu,Pressable,Path} from 'native-base';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {user} from './HomeScreen';
import {tab} from './TakePhoto';



const LoginScreen = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
	  <View style={styles.container}>
			<View style={{borderWidth:3,borderColor:"red", flexDirection:"row"}}>
				<View style={{borderWidth:3,borderColor:"blue", height:200,width:"50%", justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
					
				</View>
				
				<View style={{borderWidth:3,borderColor:"green", height:200,width:"50%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{borderWidth:3,borderColor:"red", flexDirection:"row"}}>
				<View style={{borderWidth:3,borderColor:"blue", height:200,width:"34%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:3,borderColor:"green", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:3,borderColor:"black", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{borderWidth:3,borderColor:"black",height:300,justifyContent:'center',alignItems: 'center',}}>
				<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
			</View>
	  </View>
	  <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
            <Actionsheet.Item
            startIcon={
              <Icon
                as={MaterialIcons}
                color="trueGray.400"
                mr="1"
                size="6"
                name="camera"
              />
            }
			onPress={() => navigation.navigate('TakePhoto')}
          >
            Take a Photo
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={MaterialIcons}
                name="collections"
                color="trueGray.400"
                mr="1"
                size="6"
              />
            }
          >
            Choose from gallery
          </Actionsheet.Item>
		   <Actionsheet.Item
            p={3}
            startIcon={
              <Icon
                as={MaterialIcons}
                name="cancel"
                color="trueGray.400"
                mr="1"
                size="6"
              >
              </Icon>
            }
			
			onPress={onClose}
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
	borderWidth:4,
	borderColor:"gold",
},

});
export default LoginScreen;