import React, { useState } from "react";
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Modal,FormControl,Input,Center,Button,TextArea,Divider,AlertDialog,Slider, Select} from 'native-base';
import {StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import LoginScreen from './LoginScreen';


const SettingsScreen = ({ navigation }) => {
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
	
	const [onChangeValue, setOnChangeValue] = useState(18)
	const [onChangeValue2, setOnChangeValue2] = useState(18)
	const [service, setService] = useState("")
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
				<TouchableOpacity onPress={()=> setShowModal9(true)}><Text style={styles.clik}>Pokazuj tylko partnerki w wieku</Text></TouchableOpacity >
				<TouchableOpacity onPress={()=> setShowModal10(true)}><Text style={styles.clik}>Kto może mnie oglądać</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal10(true)}><Text style={styles.clik}>kto może widzieć moją lokalizacje</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Reklamy</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Private</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Wyczyść zapis rozmowy</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Uprawnienia</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Support</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Potrzebuje pomocy</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Chce zgłosić naruszenie bezpieczeństwa</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Mam pytanie</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Centrum obsługi</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Regulamin</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> setShowModal8(true)}><Text style={styles.clik}>Polityka prywatności</Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
				<Text style={styles.information_text}>Account activities </Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}><Text style={styles.clik_logout}>Wyloguj się </Text></TouchableOpacity>
			</View>
			<View style={styles.information}>
			<Center>
				<Text style={styles.information_text}>Kasztanek.pl version 1.0</Text>
				<Text style={styles.information_text}>Stworzono w Kielce, PŚk by Swajda & Wykrota</Text>
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
				  <FormControl.Label>Your name: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change name </FormControl.Label>
				  <Input />
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
				  <FormControl.Label>Your Surname: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Surname </FormControl.Label>
				  <Input />
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
					<Input />
				</FormControl>
				
				<FormControl>
				  <FormControl.Label>Commit Password </FormControl.Label>
					<Input />
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
				  <FormControl.Label>Your Age: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Age </FormControl.Label>
				  <Input />
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
				  <FormControl.Label>Your Sex: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Sex </FormControl.Label>
				  <Input />
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
				  <FormControl.Label>Your Country: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Country </FormControl.Label>
				  <Input />
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
				  <FormControl.Label>Your Location: </FormControl.Label>
				</FormControl>
				<FormControl>
				  <FormControl.Label>Change Location </FormControl.Label>
				  <Input />
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
					accessibilityLabel="Wybierz kto może cię oglądać:"
					placeholder="Choose Service"
					_selectedItem={{
					  bg: "teal.600",
					}}
					mt={1}
					onValueChange={(itemValue) => setService(itemValue)}
				 >
					<Select.Item label="Wszyscy" value="ux" />
					<Select.Item label="Polubione Osoby" value="web" />
					<Select.Item label="Nikt" value="cross" />
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