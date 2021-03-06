import React, { useState } from "react";
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Modal,FormControl,Input,Center,Button,TextArea,Divider,AlertDialog,Slider, Select} from 'native-base';
import {StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import axios from 'axios';
import {AdresURL} from '../App.js';

const SettingsScreen = ({ navigation, route }) => {
	const [showModal1, setShowModal1] = useState(false)
	const [showModal2, setShowModal2] = useState(false)
	const [showModal3, setShowModal3] = useState(false)
	const [showModal4, setShowModal4] = useState(false)
	const [showModal5, setShowModal5] = useState(false)
	const [showModal6, setShowModal6] = useState(false)
	const [showModal7, setShowModal7] = useState(false)
	const [showModal8, setShowModal8] = useState(false)
	const [showModal9, setShowModal9] = useState(false)
	const [showModal10, setShowModal10] = useState(false)
	const [showModal11, setShowModal11] = useState(false)
	
	const name = route.params.name;
	const surname = route.params.surname;
	const age = route.params.age;
	const sex = route.params.sex;
	const location = route.params.location;
	const country = route.params.country;
	const user = route.params.user;
	const pass = route.params.pass;
	const fb = route.params.fb;
	const ins = route.params.ins;
	const tw = route.params.tw;
	const ds = route.params.ds;
	const act = route.params.active;
	
	const [changeName, setChangeName] = useState(name)
	const [changeSurname, setChangeSurname] = useState(surname)
	const [changeAge, setChangeAge] = useState(age)
	const [changeSex, setChangeSex] = useState(sex)
	const [changeLocation, setChangeLocation] = useState(location)
	const [changeCountry, setChangeCountry] = useState(country)
	const [changeUser, setChangeUser] = useState(user)
	const [changePassword, setChangePassword] = useState(pass)
	
	const [onChangeValue, setOnChangeValue] = useState(18)
	const [onChangeValue2, setOnChangeValue2] = useState(18)
	const [service, setService] = useState("")
	const [flaga,setFlaga] = useState(false)
	
	
	const logOut = async () =>{
		try {
			const response = await axios.delete(AdresURL+'/Session/2').then((response) => {console.log(response.data)});
			return true
		} catch(error) {
			console.error(error)
		}
	}
	
	const putAxios = () => {
		
		try {
			axios({
				method: 'put',
				url: AdresURL+'/Account/'+act,
				data: {
					user: user,
					pass: pass,
					personalData:{
						name: changeName,
						surname: changeSurname,
						age: changeAge,
						country: changeCountry,
						location: changeLocation,
						sex: changeSex,
						facebook: fb,
						instagram: ins,
						twitter: tw,
						description: ds
					}
				}
			}).then(function (response) {console.log(response.data)});
		} catch(error) {
			console.error(error)
		}
			
	}
	console.log(name)
	console.log(changeName)
  return (
 <NativeBaseProvider>
	 <StatusBar barStyle="dark-content" />
 <ScrollView>
   <SafeAreaView style={{ flex: 1,backgroundColor:'#3040B3FF' }}>
		<View style={styles.container}>
			<View style={styles.information}>
				<Text style={styles.information_text}>My Account</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal1(true)}><Text style={styles.clik}>Name</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal2(true)}><Text style={styles.clik}>Surname</Text></TouchableOpacity>
				<Text style={styles.clik}>Username</Text>
				<TouchableOpacity onPress={()=> setShowModal3(true)}><Text style={styles.clik}>Password</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal4(true)}><Text style={styles.clik}>Age</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal5(true)}><Text style={styles.clik}>Sex</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal6(true)}><Text style={styles.clik}>Country</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal7(true)}><Text style={styles.clik}>Location</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> {putAxios(); setShowModal11(true)}}><Text style={styles.save}>Save</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Other services</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Advanced</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Who can...</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal9(true)}><Text style={styles.clik}>Show only partners aged</Text></TouchableOpacity >
				<TouchableOpacity onPress={()=> setShowModal10(true)}><Text style={styles.clik}>See my profile</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal10(true)}><Text style={styles.clik}>See my location</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Ads</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Private</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Clear messages</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Permissions</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Support</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Report security breach</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Ask a question</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Help center</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Rules</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Privacy policy</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Account activities </Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={() => {logOut(); navigation.navigate("FirstScreen");}}>
					<Text style={styles.clik_logout}>Log out </Text>
				</TouchableOpacity>
			</View>
			<View style={styles.information}>
			<Center>
				<Text style={styles.information_text}>Kasztanek.pl version 1.0</Text>
				<Text style={styles.information_text}>Stworzono w Kielce, P??k by Swajda & Wykrota</Text>
			</Center>
			</View>
		</View>
   </SafeAreaView>
   </ScrollView>
   
		<>
		  <Modal isOpen={showModal1} onClose={() => setShowModal1(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Name</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your name: {name}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change name </FormControl.Label>
				  <Input onChangeText={(name) => setChangeName(name)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal1(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal1(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Surname</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your Surname: {surname}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Surname </FormControl.Label>
				  <Input onChangeText={(surname) => setChangeSurname(surname)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal2(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal2(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Password</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Old Password </FormControl.Label>
					<Input />
				</FormControl>
				
				<FormControl>
				  <FormControl.Label>New Password </FormControl.Label>
					<Input onChangeText={(password) => setChangePassword(password)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal3(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal3(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal4} onClose={() => setShowModal4(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Age</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your Age: {age}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Age </FormControl.Label>
				  <Input onChangeText={(age) => setChangeAge(age)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal4(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal4(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal5} onClose={() => setShowModal5(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Sex</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your Sex: {sex}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Sex </FormControl.Label>
				  <Input  onChangeText={(sex) => setChangeSex(sex)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal5(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal5(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal6} onClose={() => setShowModal6(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Country</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your Country: {country}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Country </FormControl.Label>
				  <Input onChangeText={(country) => setChangeCountry(country)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal6(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal6(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal7} onClose={() => setShowModal7(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Location</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Your Location: {location}</FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Location </FormControl.Label>
				  <Input onChangeText={(location) => setChangeLocation(location)}/>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal7(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal7(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal8} onClose={() => setShowModal8(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Advance</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Ups... This options not Working</FormControl.Label>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal8(false)
					}}
				  >
					Cancel
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal9} onClose={() => setShowModal9(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Choose age from: {onChangeValue}</FormControl.Label>
				</FormControl>
					<Box mx="5" w="80%">
						<Slider
						  minValue={18}
						  maxValue={50}
						  defaultValue={18}
						  colorScheme="cyan"
						  onChange={(v) => {
							setOnChangeValue(Math.floor(v))
						  }}
						>
						  <Slider.Track>
							<Slider.FilledTrack />
						  </Slider.Track>
						  <Slider.Thumb />
						</Slider>
					  </Box>
					<FormControl>
						<FormControl.Label>Choose age to: {onChangeValue2}</FormControl.Label>
					</FormControl>  
					  <Box mx="5" w="80%">
						<Slider
						  minValue={18}
						  maxValue={50}
						  defaultValue={18}
						  colorScheme="cyan"
						  onChange={(v) => {
							setOnChangeValue2(Math.floor(v))
						  }}
						>
						  <Slider.Track>
							<Slider.FilledTrack />
						  </Slider.Track>
						  <Slider.Thumb />
						</Slider>
					  </Box>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal9(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal9(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		<>
		  <Modal isOpen={showModal10} onClose={() => setShowModal10(false)}>
			<Modal.Content maxWidth="400px">
			 <Modal.Header>...</Modal.Header>
			  <Modal.CloseButton />
			  <Modal.Body>
				<Select
					selectedValue={service}
					minWidth="200"
					accessibilityLabel="Wybierz kto mo??e ci?? ogl??da??:"
					placeholder="Choose Service"
					_selectedItem={{
					  bg: "teal.600",
					}}
					mt={1}
					onValueChange={(itemValue) => setService(itemValue)}
				 >
					<Select.Item label="All" value="ux" />
					<Select.Item label="Friendswy" value="web" />
					<Select.Item label="None" value="cross" />
				 </Select>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal10(false)
					}}
				  >
					Cancel
				  </Button>
				  <Button
					onPress={() => {
					  setShowModal10(false)
					}}
				  >
					Save
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
		
		<>
		  <Modal isOpen={showModal11} onClose={() => setShowModal11(false)}>
			<Modal.Content maxWidth="400px">
			  <Modal.CloseButton />
			  <Modal.Header>Changes</Modal.Header>
			  <Modal.Body>
				<FormControl>
				  <FormControl.Label>Change successful</FormControl.Label>
				</FormControl>
			  </Modal.Body>
			  <Modal.Footer>
				<Button.Group space={2}>
				  <Button
					variant="ghost"
					colorScheme="blueGray"
					onPress={() => {
					  setShowModal11(false)
					}}
				  >
					Cancel
				  </Button>
				</Button.Group>
			  </Modal.Footer>
			</Modal.Content>
		  </Modal>
		</>
		
</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  
  information: {
	  backgroundColor:'#3040B3FF',
	  //padding:10,
	  paddingVertical:15,

  },
	information_text:{
		textAlign:'center',
		color:'white',
		fontSize:18,
	},

  options: {
	backgroundColor:'#AAAAAA'
  },
  
  clik: {
	marginVertical:1,
	paddingHorizontal:5,
	  paddingVertical:15,
	  backgroundColor:'white',
	  fontSize:16,
  },
  save: {
	marginVertical:1,
	paddingHorizontal:5,
	  paddingVertical:15,
	  backgroundColor:'green',
	  fontSize:16,
	  color:'white',
	  textAlign:'center',
  },
	clik_logout: {
		marginVertical:1,
		paddingHorizontal:5,
		paddingVertical:15,
		backgroundColor:'white',
		fontSize:16,
		color:'#A30B00',
	},
});

export default SettingsScreen;