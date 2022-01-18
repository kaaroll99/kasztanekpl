import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon, FormControl,Stack,Input,WarningOutlineIcon,Divider,Radio,Select,CheckIcon,Button} from 'native-base';
import { fontSize } from "styled-system";


const RegisterScreen = ({ navigation }) => {
	const [login, setLogin] = useState(false);
	const [password, setPassword] = useState(false);
	const [name, setName] = useState(false);
	const [surname, setSurname] = useState(false);
	const [age, setAge] = useState(false);
	const [country, setCountry] = useState(false);
	const [location, setLocation] = useState(false);
	const [sex, setSex] = useState(false);
  return (
			<ScrollView>
			  <View style={styles.container}>
			  
					<FormControl isRequired>
						<Stack mx="4">
						
						  <FormControl.Label>Login</FormControl.Label>
								<Input style={styles.input} type="text"  placeholder="Login" onChangeText={(login) => setLogin(login)}/>
								
						  <FormControl.HelperText>
								Must be atleast 6 characters.
						  </FormControl.HelperText>
						  
						  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
								Atleast 6 characters are required.
						  </FormControl.ErrorMessage>
						
						  <FormControl.Label>Password</FormControl.Label>
								<Input style={styles.input} type="password"  placeholder="password" onChangeText={(password) => setPassword(password)}/>
								
						  <FormControl.HelperText>
								Must be atleast 6 characters.
						  </FormControl.HelperText>
						  
						  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
								Atleast 6 characters are required.
						  </FormControl.ErrorMessage>
						  
						</Stack>
						<Divider style={{marginVertical:15, width:"80%"}}/>{/*Ta ledwo widoczna szara linia pod ostatnim must be...*/}
					  </FormControl>
					  <Stack mx="4">
						  <FormControl isRequired>
								 <FormControl.Label>Name</FormControl.Label>
									<Input style={styles.input} type="text"  placeholder="Name" onChangeText={(name) => setName(name)}/>
								
								<FormControl.Label>Surname</FormControl.Label>
									<Input style={styles.input} type="text"  placeholder="Surname" onChangeText={(surname) => setSurname(surname)}/>
							
						    <FormControl.Label>Sex</FormControl.Label>
								<Radio.Group defaultValue="1" name="sexGroup" onValueChange={(sex) => setSex(sex)}>
								  <Radio colorScheme="blue" value="1" my={1}>Male</Radio>
								  <Radio colorScheme="pink" value="2" my={1}>Female</Radio>
								</Radio.Group>
							<FormControl.Label>Age</FormControl.Label>
							 <Select
								 style={styles.input}
								selectedValue={age}
								minWidth="200"
								accessibilityLabel="Age"
								placeholder="Choose age"
								_selectedItem={{
								  bg: "teal.600",
								  endIcon: <CheckIcon size="5" />,
								}}
								onValueChange={(age) => setAge(age)}
							  >
								<Select.Item label="16" value="1"/>
								<Select.Item label="17" value="2"/>
								<Select.Item label="18" value="3"/>
								<Select.Item label="19" value="4"/>
								<Select.Item label="20" value="5"/>
								<Select.Item label="21" value="6"/>
								<Select.Item label="22" value="7"/>
								<Select.Item label="23" value="8"/>
								<Select.Item label="24" value="9"/>
								<Select.Item label="25" value="10"/>
								<Select.Item label="26" value="11"/>
								<Select.Item label="27" value="12"/>
								<Select.Item label="28" value="13"/>
								<Select.Item label="29" value="14"/>
								<Select.Item label="30" value="15"/>
								<Select.Item label="31" value="16"/>
								<Select.Item label="32" value="17"/>
								<Select.Item label="33" value="18"/>
								<Select.Item label="34" value="19"/>
								<Select.Item label="35" value="20"/>
								<Select.Item label="36" value="21"/>
								<Select.Item label="37" value="22"/>
								<Select.Item label="38" value="23"/>
								<Select.Item label="39" value="24"/>
								<Select.Item label="40" value="25"/>
								<Select.Item label="41" value="26"/>
								<Select.Item label="42" value="27"/>
								<Select.Item label="43" value="28"/>
								<Select.Item label="44" value="29"/>
								<Select.Item label="45" value="30"/>
								<Select.Item label="46" value="31"/>
							  </Select>

							  
							  <FormControl.Label>Country</FormControl.Label>
							  <Select  style={styles.input}
								selectedValue={country}
								minWidth="200"
								placeholder="Choose your Country"
								_selectedItem={{
								  bg: "teal.600",
								  endIcon: <CheckIcon size="5" />,
								}}
								onValueChange={(country) => setCountry(country)}
							  >
								<Select.Item label="Poland" value="Poland"/>
								<Select.Item label="Russia" value="Russia"/>
								<Select.Item label="Germany" value="Germany"/>
								<Select.Item label="Argentina" value="Argentina"/>
								<Select.Item label="France" value="France"/>
								<Select.Item label="Belarus" value="Belarus"/>
								<Select.Item label="Ukraina" value="Ukraina"/>
								<Select.Item label="Netherlands" value="Netherlands"/>
								<Select.Item label="Watykan" value="Watykan"/>
								<Select.Item label="Włochy" value="Włochy"/>
								<Select.Item label="Anglia" value="Anglia"/>
								<Select.Item label="Sweden" value="Sweden"/>
								<Select.Item label="Finland" value="Finland"/>
								<Select.Item label="Norwey" value="Norwey"/>
								<Select.Item label="Serbia" value="Serbia"/>
								<Select.Item label="Cech Republic" value="Cech"/>
								<Select.Item label="Espania" value="Espania"/>
								<Select.Item label="Portugal" value="Portugal"/>
								<Select.Item label="Egypt" value="Egypt"/>
								<Select.Item label="China" value="China"/>
								<Select.Item label="USA" value="USA"/>
								<Select.Item label="Canada" value="Canada"/>
								<Select.Item label="Mexico" value="Mexico"/>
								<Select.Item label="Colombia" value="Colombia"/>
								<Select.Item label="Brasil" value="Brasil"/>
								<Select.Item label="Ecuador" value="Ecuador"/>
								<Select.Item label="Venesuela" value="Venesuela"/>
								<Select.Item label="Chile" value="Chile"/>
								<Select.Item label="RPA" value="RPA"/>
								<Select.Item label="Japan" value="Japan"/>
								<Select.Item label="Monaco" value="Monaco"/>
							  </Select>
							  
							  <FormControl.Label>Location</FormControl.Label>
									<Input style={styles.input} type="text"  placeholder="Location" onChangeText={(location) => setLocation(location)}/>
						    </FormControl>
					   </Stack>
						<Button style={styles.registerButton} onPress={() => navigation.navigate('LoginScreen')} size="100">
							<Text style={styles.text_register}>REGISTER</Text>
						</Button>
			  </View>
			</ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
	paddingTop: 10,
  },

  registerButton: {
	height: "10%",
 	width: "100%",
  	backgroundColor: "#83BF28",
  	color: 'white',
  	alignItems: 'center',
	justifyContent: 'center',
	marginTop:20,
	marginBottom:45,
  	borderTopLeftRadius: 20,
  	borderTopRightRadius:20,
  },  

  text_register:{
	color: 'white',
	fontSize: 25,
	fontWeight: 'bold',
  },

	input:{
		height:50,
	},
});
export default RegisterScreen;