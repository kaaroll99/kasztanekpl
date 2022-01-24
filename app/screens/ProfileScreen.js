import React, { useState, useEffect } from "react";
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Modal,FormControl,Input,Center,Button,TextArea,Divider,Spinner,Heading} from 'native-base';
import { Path } from "react-native-svg";
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import axios from 'axios';
import {AdresURL} from '../App.js';
import {user} from './HomeScreen.js';
import Loader from '../components/Loader.js';

const currentColor = 'yellow'
const nonColor = 'white'

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose()
  
  return (
    <>
		<HStack space={2}>
			<TouchableOpacity onPress={onOpen}>
				<Avatar size="2xl" source={require("../assets/1.jpg")} style={{borderWidth:2,borderColor:'white'}}>Zdjecie</Avatar>
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
	const [profile,setProfile] = useState([]);
	const [active,setActive] = useState([]);
	const [flaga,setFlaga] = useState(false);
	const [size,setSize] = useState();
	
	const [editInfo, setEditInfo] = useState(''); 
	const [insta, setInsta] = useState(''); 
	const [face, setFace] = useState(''); 
	const [twit, setTwit] = useState(''); 

	const [showModal, setShowModal] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclose()
	
	const putAxios = () => {
		try {
			axios({
				method: 'put',
				url: AdresURL+'/Account/'+active[1].activeUserToChangeValue,
				data: {
					user: profile[active[1].activeUser].user,
					pass: profile[active[1].activeUser].pass,
					personalData:{
						name: profile[active[1].activeUser].personalData.name,
						surname: profile[active[1].activeUser].personalData.surname,
						age: profile[active[1].activeUser].personalData.age,
						country: profile[active[1].activeUser].personalData.country,
						location: profile[active[1].activeUser].personalData.location,
						sex: profile[active[1].activeUser].personalData.sex,
						facebook: face,
						instagram: insta,
						twitter: twit,
						description: editInfo
					}
				}
			}).then(function (response) {console.log(response.data)});
		} catch(error) {
			console.error(error)
		}
			
	}
	
	const getData = async () => {
    try {
		  const response = await axios.get(AdresURL+'/Account').then((response) => {setProfile(response.data)});
			
    } catch(error) {
      console.error(error)
		}
	}
	
	const getActive = async () => {
    try {
		  const response = await axios.get(AdresURL+'/Session').then((response) => {setActive(response.data)});

    } catch(error) {
      console.error(error)
		}
	}
	
	
	useEffect(() => {
		getData();
		getActive();
			if(active.length != 0){
				setEditInfo(profile[active[1].activeUser].personalData.description)
				setInsta(profile[active[1].activeUser].personalData.instagram)
				setFace(profile[active[1].activeUser].personalData.facebook)
				setTwit(profile[active[1].activeUser].personalData.twitter)
				setFlaga(true)
			}
	}, []) 
	console.log(profile)
	console.log(active)
	

	
	
if(flaga == true){
		
  return (
  <NativeBaseProvider>

	  <SafeAreaView style={{ flex: 1,backgroundColor:'#3040B3FF' }}>

		<View style={styles.account}>
			<StatusBar barStyle="light-content" />
			<View style={styles.inAccount}>
				 <>
		<HStack space={2}>
			<TouchableOpacity onPress={onOpen}>
				<Avatar size="2xl" source={active[1].activeUser === 1 ? user[3].uri : active[1].activeUser === 2 ? user[3].uri2 : user[3].uri3} style={{borderWidth:2,borderColor:'white'}}>Zdjecie</Avatar>
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
				<Text style={{fontSize:25, paddingTop:10, color:'white'}}>
					{profile[active[1].activeUser].personalData.name},
					{profile[active[1].activeUser].personalData.age}
				</Text>
				<View style={styles.buttony}>
					<TouchableOpacity onPress={() => navigation.navigate('SettingsScreen', 
					{
						name: profile[active[1].activeUser].personalData.name,
						surname: profile[active[1].activeUser].personalData.surname,
						age: profile[active[1].activeUser].personalData.age,
						country: profile[active[1].activeUser].personalData.country,
						location: profile[active[1].activeUser].personalData.location,
						sex: profile[active[1].activeUser].personalData.sex,
						user: profile[active[1].activeUser].user,
						pass: profile[active[1].activeUser].pass,
						fb: profile[active[1].activeUser].personalData.facebook,
						tw: profile[active[1].activeUser].personalData.twitter,
						ins: profile[active[1].activeUser].personalData.ins,
						ds: profile[active[1].activeUser].personalData.description,
						active: active[1].activeUserToChangeValue,
					} 
					)}>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='settings' size={35}/>
						</Text>
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => navigation.navigate('SelfieScreen')}>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='add-a-photo' size={35}/>
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowModal(true)}>
						<Text style={styles.buttonStyle}>
							<MaterialIcons name='edit' size={35}/>
						</Text>
					</TouchableOpacity>
				</View>
			
			</View>
			<ScrollView>
				<View style={styles.inAccount2}>
					<Text style={styles.opis}>
						{editInfo}
					</Text>
					
					<Text style={styles.social}>
							<FontAwesome name='instagram' size={30}/> {insta}
					</Text>
					
					<Text style={styles.social}>
							<FontAwesome name='facebook-official' size={30}/> {face}
					</Text>
					
					<Text style={styles.social}>
							<FontAwesome name='twitter' size={30}/> {twit}
					</Text>
					
				</View>
			</ScrollView>
		</View>

		<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
		<Modal.Content maxWidth="400px">
			<Modal.CloseButton />
			<Modal.Header>Edit Information</Modal.Header>
			<Modal.Body>
				<FormControl>
				  <FormControl.Label>Basic Info</FormControl.Label>
					<TextArea
					  value={editInfo}
					  onChangeText={(editInfo) => setEditInfo(editInfo)}
					/>
				</FormControl>
					<Divider bg="red.500" style={{marginTop:15, width:"100%"}}/>
				<FormControl>
				  <FormControl.Label mt="3">Social Media</FormControl.Label>
					<FormControl.Label>Instagram</FormControl.Label>
					  <Input 
							value={insta}
							onChangeText={(insta) => setInsta(insta)}
					  />
					</FormControl>
					<FormControl mt="3">
					  <FormControl.Label>Facebook</FormControl.Label>
					  <Input 
							value={face}
							onChangeText={(face) => setFace(face)}
					  />
					</FormControl>
					<FormControl mt="3">
					  <FormControl.Label>Twitter</FormControl.Label>
					  <Input 
							value={twit}
							onChangeText={(twit) => setTwit(twit)}
					  />
					</FormControl>
          </Modal.Body>
		  <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false), setEditInfo(editInfo)
                }}
              >
                 Cancel
              </Button>
              <Button
                onPress={() => {
                  putAxios(); setShowModal(false);
                }}
              >
                Save
               </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
		
    </SafeAreaView>
</NativeBaseProvider>

  );
}else{
	return(
		<Loader />
	)
}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
  
  account:{
	backgroundColor:'white',
	height:"95%",
	marginTop:"10%",
	
  },
  
  inAccount:{
	backgroundColor:'#3040B3FF',
	height:"40%",
	alignItems: 'center',
	borderBottomLeftRadius:40,
	borderBottomRightRadius:40,
  }, 
  
  inAccount2:{
	justifyContent:'center',
	alignItems: 'center',
	padding:20,
  },
  
   buttony:{
	paddingTop:30,
	flexDirection:"row",
	padding:10,
	width:"100%",
	justifyContent:'space-around',
	alignItems: 'center',
  },
  
  buttonStyle:{
	backgroundColor:'white',
	borderRadius:10,
	color:'#3040B3FF',
	padding:15,
	justifyContent:'center',
	alignItems: 'center',
  },
	opis:{
	  fontSize:18,
	},
	social:{
	  paddingTop:'5%',
		fontSize:20,

	},
	loader:{
	flex:1,
	alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;