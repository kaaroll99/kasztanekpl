import * as React from 'react';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon} from 'native-base';
import { Path } from "react-native-svg";
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {user} from './HomeScreen';
import { style } from 'styled-system';

const currentColor = '#3040B3'
const facebook = '#3B5997'
const instagram = '#D90479'
const twitter = '#00ACED'

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <>
	<StatusBar barStyle="light-content"/>
		<HStack space={2}>
			<TouchableOpacity onPress={onOpen}>
				<Avatar size="2xl" source={user[3].uri} style={{borderWidth:2, borderColor:'white'}}>Zdjecie</Avatar>
			</ TouchableOpacity>
		</HStack>
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
                color="trueGray.400"
                mr="1"
                h="24"
                w="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
              </Icon>
            }
			
			onPress={onClose}
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

const ProfileScreen = ({ navigation }) => {
  return (
  <NativeBaseProvider>
    
		<View style={styles.account}>
			<View style={style.container2}>
			<View style={styles.inAccount}>
				<Example/>
				<Text style={{fontSize:25, paddingTop:10,color:'white'}}>
					{user[3].name}, 
					{user[3].age}
				</Text>
				<View style={styles.buttony}>
					<TouchableOpacity>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='settings' size={25}/>
						</Text>
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => navigation.navigate('SelfieScreen')}>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={25}/>
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='edit' size={25}/>
						</Text>
					</TouchableOpacity>
				</View>
			
			</View>
			<ScrollView>
				<View style={styles.inAccount2}>
					<Text style={styles.opis}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, libero nec venenatis iaculis, leo neque tempor mi, sed dignissim dui tortor et metus. Sed mattis, odio vel placerat blandit, ante arcu vestibulum massa, a volutpat ipsum dolor in metus. Cras suscipit pellentesque molestie. Nam consectetur, mauris eget hendrerit posuere, purus magna volutpat nunc, eget interdum purus nulla tempus arcu.

					</Text>
					
					<Text style={{marginTop:30, marginBottom:15,}}>
							<FontAwesome name='instagram' size={20} color={instagram}/> <Text style={{fontSize:20}}>  DanielS</Text>
					</Text>
					
					<Text style={{marginBottom:15}}>
							<FontAwesome name='facebook-official' size={20} color={facebook}/> <Text style={{fontSize:20}}>  DanielS</Text>
					</Text>
					
					<Text style={{marginBottom:20}}>
							<FontAwesome name='twitter' size={20} color={twitter}/> <Text style={{fontSize:20}}>  DanielS</Text>
					</Text>
					
				</View>
			</ScrollView>
		</View>
	</View>
	{/*--------------------------------------FOOTER--------------------------------------*/}
		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
			<MaterialCommunityIcons name='cards' size={30}
				color={'gray'}/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
				<FontAwesome name='comments' size={30} color={'gray'}/>
			</TouchableOpacity>	
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
				<FontAwesome name='user' size={30}
				color={currentColor}/>
			</TouchableOpacity>
			</View>
		</View>
    
</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
  

  container2:{
	width:"100%",
	height:"87%",
},

footer:{
	height:"8%",
	width:"100%",
	alignItems: 'center',
	paddingTop:"3%",
	flexDirection: "row",
	justifyContent: "space-around",
  },
  
  account:{
	height:"90%",
	borderBottomLeftRadius:20,
	borderBottomRightRadius:20,
  },
  
  inAccount:{
	backgroundColor:"#3040B3",
	paddingTop:"13%",
	height:"45%",
	alignItems: 'center',
	borderBottomLeftRadius:40,
	borderBottomRightRadius:40,
	shadowOffset: {width:0, height:5},
	shadowColor: "#000",
	shadowOpacity: 0.5,
	shadowRadius: 10,
	elevation: 19,
  }, 
  
  inAccount2:{
	justifyContent:'center',
	alignItems: 'center',
  },
  
   buttony:{
	flexDirection:"row",
	marginTop:"5%",
	padding:"2%",
	width:"100%",
	justifyContent:'space-around',
	alignItems: 'center',
  },
  
  buttonStyle:{
	backgroundColor:'white',
	borderRadius:5,
	fontSize:15,
	color:"#3040B3",
	padding:10,
	paddingLeft:20,
	paddingRight:20,

  },

  opis:{
	  color:'black',
	  padding:"5%",
	  fontSize:17,
  }

});

export default ProfileScreen;