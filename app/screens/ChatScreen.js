import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button,FlatList,VStack, Spacer,Input,FormControl} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';
import {user, userLove} from './HomeScreen';
import {right} from "styled-system";

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
	 { id: "1", name: "Basia", uri: require('../assets/1.jpg'), lastMsg: "vsgverherhbethvqtbjrjyrjyrjnryj", time: "6:34PM"},
	 { id: "2", name: "Basia", uri: require('../assets/1.jpg'), lastMsg: "Hey kochanie <3", time: "6:34PM"},
  ]
  if (start === true){
  return (
	  <SafeAreaView>
		  <StatusBar barStyle="dark-content" />
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
							<Text style={{fontSize:20, fontWeight:"bold", color:'black'}}>{item.name}</Text>
							<Text style={{fontSize:15, color:'black'}}>{item.lastMsg}</Text>
						</View>
							<View style>
									<Text style={styles.time_box}>{item.time}</Text>
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
			<StatusBar barStyle="dark-content" />
			<View style={{paddingBottom:20}}>
				<Button onPress={()=> setStart(true)}>{identify}</Button>
			</View>
			<View style={styles.chatRoom}>
				<FlatList
					keyExtractor={(item) => item.id}
					data={localMsg}
					renderItem={({item})=>(
						<View style={styles.rec_msg_box}>
							<View>
								<View>
									<Text style={styles.rec_msg_text}>{item.lastMsg}</Text>
								</View>
							</View>
						</View>
						)
					}
				/> 
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
	height:"95%",
	marginTop:"10%",
	backgroundColor:'white',
   },
   
   rec_msg_box:{
		backgroundColor:'#DDDDDD',
		marginTop:7,
		marginLeft:5,
		maxWidth:'60%',
		minWidth:'30%',
		paddingHorizontal:20,
		paddingVertical:10,
		borderTopLeftRadius:10,
		borderTopRightRadius:20,
		borderBottomRightRadius:10,
	},
	send_msg_box:{
		backgroundColor:'#3040B3FF',
		marginTop:7,
		marginLeft:5,
		maxWidth:'60%',
		minWidth:'30%',
		left:'38%',
		paddingHorizontal:20,
		paddingVertical:10,
		borderTopLeftRadius:20,
		borderTopRightRadius:10,
		borderBottomLeftRadius:10,
	},
	rec_msg_text:{
		fontSize:16,
	},
	send_msg_text:{
		fontSize:16,
		color:'white',
	},

   chat:{
	    borderWidth:1,
	   borderColor:'black',
   },
	list:{
		backgroundColor:'white',
		marginTop:10,
		borderTopWidth:1,
		borderBottomWidth:1,
		borderColor:'#DDDDDD',
		paddingVertical:5,
	},
   showChat:{
   },
   
   avatarANDname:{
		flexDirection:"row",
	   marginLeft:5,
   },
   
   name:{
		minWidth:230,
	   color:'white',
	   width:'75%',
	   marginLeft:10,
   },
   
   chatRoom:{
		height:"93%",
   },
   
   sendMsg:{
		borderWidth:3,
		borderColor:'blue',
		height:"8%",
	   backgroundColor:'red',
   },
	time_box:{
		position:"absolute",
		flex:1,
		right:'80%',
		top:'78%',
		color:'#3040B3FF',
	},

   
});

export default ChatScreen;