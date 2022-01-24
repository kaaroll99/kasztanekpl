import React, { useState, useEffect  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button,Heading,Flex,Menu,Pressable,Path} from 'native-base';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {user} from './HomeScreen';
import TakePhoto from './TakePhoto';

const SelfieScreen = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [picture, setPicture] = useState(false);
  const [flaga, setFlaga] = useState(0);
  const [array,setArray] = useState([]);
  
  const takePhoto = (variable)=>{
	  setArray(oldArray => [...oldArray,variable] );
  }
  
  const reset = (variable)=>{
	  setFlaga(variable)
  }
  
  const show = (wd,hg,id) =>{
	return(<Image style={{height:hg,width:wd}} source={{uri:array[id]}}/>)
	  
  }
  
  console.log(array)
  if(flaga === 0){
  return (

    <SafeAreaView style={{ flex: 1 }}>
		<StatusBar barStyle="dark-content" />
	  <View style={styles.container}>
			<View style={{flexDirection:"row"}}>
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"50%", justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,0)}
					</TouchableOpacity>
					
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"50%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,1)}
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{flexDirection:"row"}}>
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"34%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,2)}
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,3)}
					</TouchableOpacity>
				</View>
				
				<View style={{borderWidth:1,borderColor:"#3040B3FF", height:200,width:"33%",justifyContent:'center',alignItems: 'center',}}>
					<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,4)}
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{borderWidth:1,borderColor:"#3040B3FF",height:300,justifyContent:'center',alignItems: 'center',}}>
				<TouchableOpacity onPress={onOpen}>
						<Text><MaterialIcons name='add-a-photo' size={35}/></Text>
						{show(200,200,5)}
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
			onPress={() => {setFlaga(3)}}
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
  }else if(flaga === 3){
	  return(
		<TakePhoto sendPhoto = {takePhoto} resetFlag = {reset} />
			
	  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
},

});
export default SelfieScreen;