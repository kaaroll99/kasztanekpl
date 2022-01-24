import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center, Heading,Button,FlatList,VStack, Spacer,Input,FormControl,Spinner} from 'native-base';
import { List } from 'react-native-paper';
import {FontAwesome} from '@expo/vector-icons';
import {user, userLove} from './HomeScreen';
import {right} from "styled-system";
import {AdresURL} from '../App.js';
import Loader from '../components/Loader.js';
import axios from 'axios';

export const picture = [
  { id: "1", uri: require('../assets/1.jpg'),},
  { id: "2", uri: require('../assets/2.jpg')},
  { id: "3", uri: require('../assets/3.jpg')},
]
export const Example = () => {
	
const [start,setStart] = useState(true);
const [identify,setIdentify] = useState();
const [flaga,setFlaga] = useState(false);
const [msg,setMsg] = useState([]);

const getData = async () => {
    try {
		  const response = await axios.get(AdresURL+'/Chat').then((response) => {setMsg(response.data)});
		  setFlaga(true)
    } catch(error) {
      console.error(error)
	}
  }
	
	useEffect(() => {
		getData();
	}, [])  
  
  
  if (start === true && flaga === true){
  return (
	  <SafeAreaView>
		  <StatusBar barStyle="dark-content" />
		  {/*<FlatList
	    keyExtractor={(item) => item.msg[0].id}
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
		  /> */}
		<TouchableOpacity onPress={()=> {setStart(false),setIdentify(msg[0].id)}}>
			<View style={{borderWidth:2, borderColor:'red'}}>
				<Image source={picture[1].uri} style={{ width: 80, height: 80, borderRadius:50}}/>
				<View style={styles.name}>
						<Text style={{fontSize:20, fontWeight:"bold", color:'black'}}>{msg[0].from}</Text>
						<Text style={{fontSize:15, color:'black'}}>{msg[0].messageFrom[1].message}</Text>
						<Text style={{fontSize:15, color:'black'}}>{msg[0].messageFrom[1].time}</Text>
				</View>
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity onPress={()=> {setStart(false),setIdentify(msg[1].id)}}>
			<View style={{borderWidth:2, borderColor:'red'}}>
				<Image source={picture[0].uri} style={{ width: 80, height: 80, borderRadius:50}}/>
				<View style={styles.name}>
						<Text style={{fontSize:20, fontWeight:"bold", color:'black'}}>{msg[1].from}</Text>
						<Text style={{fontSize:15, color:'black'}}>{msg[1].messageTo[2].message}</Text>
						<Text style={{fontSize:15, color:'black'}}>{msg[1].messageTo[2].time}</Text>
				</View>
			</View>
		</TouchableOpacity>  
    </SafeAreaView>
  );
  }else if (start === false && flaga === true){
	  if(identify === 1){
		  return (
			<SafeAreaView>
				<StatusBar barStyle="dark-content" />
				<View style={{paddingBottom:20}}>
					<Button onPress={()=> setStart(true)}>{msg[0].from}</Button>
				</View>
				<View style={styles.chatRoom}>
					{/*<FlatList
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
					/> */}
					
						<View>
							<Text style={styles.rec_msg_text}>{msg[0].messageFrom[0].message}</Text>
							<Text style={styles.send_msg_box}>{msg[0].messageTo[0].message}</Text>
							<Text style={styles.rec_msg_text}>{msg[0].messageFrom[1].message}</Text>
						</View>
				</View>
			</SafeAreaView>
			);
	  }else if(identify === 2){
		   return (
			<SafeAreaView>
				<StatusBar barStyle="dark-content" />
				<View style={{paddingBottom:20}}>
					<Button onPress={()=> setStart(true)} >{msg[1].from}</Button>
				</View>
				<View style={styles.chatRoom}>
					{/*<FlatList
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
					/> */}
					
						<View>
							<Text style={styles.rec_msg_text}>{msg[1].messageFrom[0].message}</Text>
							<Text style={styles.send_msg_box}>{msg[1].messageTo[0].message}</Text>
							<Text style={styles.send_msg_box}>{msg[1].messageTo[1].message}</Text>
							<Text style={styles.send_msg_box}>{msg[1].messageTo[2].message}</Text>

						</View>
				</View>
			</SafeAreaView>
			);
	  }
	}else{
		return(
			<Loader />
		)
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