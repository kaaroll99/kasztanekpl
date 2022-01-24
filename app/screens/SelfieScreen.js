import React, { useState, useEffect  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,Heading,Flex,Menu,Pressable,Path} from 'native-base';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {user} from './HomeScreen';
import TakePhoto from './TakePhoto';

const LoginScreen = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [picture, setPicture] = useState('');
  
 
  
  return (

    <SafeAreaView style={{ flex: 1 }}>
		<StatusBar barStyle="dark-content" />
	  <View style={styles.container}>
			<View style={{flexDirection:"row"}}>
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"50%", justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
					
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"50%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{flexDirection:"row"}}>
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"34%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{borderWidth:1,borderColor:"#3040B3FF",height:300,justifyContent:'center',alignItems: 'center',}}>
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
},

});
export default LoginScreen;