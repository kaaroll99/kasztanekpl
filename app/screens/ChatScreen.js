import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button,FlatList,VStack, Spacer,Input,FormControl} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';
import {user, userLove} from './HomeScreen';

export const msg = [
  { id: "1", name: "Basia", uri: require('../assets/1.jpg'), lastMsg: "Hey kochanie <3", time: "6:34PM"},
  { id: "2", name: "Kasia", uri: require('../assets/2.jpg'),lastMsg: "Hey, What's up",time: "10:00AM"},
  { id: "3", name: "Karolina", uri: require('../assets/3.jpg'),lastMsg: "I love u :*",time: "7:54AM"},
  { id: "5", name: "Antonia", uri: require('../assets/5.jpg'),lastMsg: "Where are my eggs -_-",time: "8:22PM"},
]
export const Example = () => {
  const [start,setStart] = useState(true);
  const [identify,setIdentify] = useState('');
  const localMsg = [
	 { id: "1", name: "Basia", uri: require('../assets/1.jpg'), lastMsg: "Hey kochanie <3", time: "6:34PM"},
  ]
  if (start === true){
  return (
    <SafeAreaView>
      <FlatList
	    keyExtractor={(item) => item.id}
        data={msg}
        renderItem={({item})=>(
			<View style={styles.list}>
				<TouchableOpacity onPress={()=> {setStart(false),setIdentify(item.id)}}>
					<View style={styles.avatarANDname}>
						<Image 
						source={item.uri}
						style={{ width: 80, height: 80, borderRadius:50}}
						/>
						<View style={styles.name}>
							<Text style={{fontSize:20, fontWeight:"bold"}}>{item.name}</Text>
							<Text style={{fontSize:15}}>{item.lastMsg}</Text>
						</View>
							<View style={{borderWidth:3,}}>
									<Text>{item.time}</Text>
							</View>
					</View>
				</TouchableOpacity>
			</View>
			)
		}
      /> 
    </SafeAreaView>
  );
  }else{
	  return (
		<SafeAreaView>
			<View style={{borderWidth:3}}>
				<Button onPress={()=> setStart(true)}>{identify}</Button>
			</View>
			<View style={styles.chatRoom}>
				<FlatList
					keyExtractor={(item) => item.id}
					data={localMsg}
					renderItem={({item})=>(
						<View style={styles.list}>
							<View>
								<View style={{borderWidth:3,}}>
									<Text>{item.id}</Text>
								</View>
							</View>
						</View>
						)
					}
				/> 
			</View>
			
			<View style={styles.sendMsg}>
				<Input type="Text"/>
			</View>
		</SafeAreaView>
		);
	}
}

const ChatScreen = ({ navigation }) => {
	
	return (
	<NativeBaseProvider>
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.main}>
				<View style={styles.showChat}> 
					<Example/>
				</View>
			</View>
		</SafeAreaView>
	</NativeBaseProvider>
	);
		
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },   
   main:{
	borderWidth:3,
	borderColor:"green",
	height:"95%",
	marginTop:"10%",
   },
   
   list:{
	   borderWidth:3,
	   borderColor:'red',
	   marginTop:6,
   },
   chat:{
	    borderWidth:3,
	   borderColor:'black',
   },
   showChat:{
	   borderWidth:3,
	   borderColor:'gold',
   },
   
   avatarANDname:{
		borderWidth:3,
		borderColor:'blue',
		flexDirection:"row",
   },
   
   name:{
		borderWidth:3,
		borderColor:'aqua',
		minWidth:230
   },
   
   chatRoom:{
		borderWidth:3,
		borderColor:'red',
		height:"86%",
   },
   
   sendMsg:{
		borderWidth:3,
		borderColor:'blue',
		height:"8%"
   },
   
});

export default ChatScreen;