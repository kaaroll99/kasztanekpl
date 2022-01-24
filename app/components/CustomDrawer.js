import React, {useState, useEffect} from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center,Button,Spinner,Heading} from 'native-base';
import {AdresURL} from '../App.js';
import Loader from '../components/Loader.js';
import axios from 'axios';
import {FontAwesome} from "@expo/vector-icons";

const CustomDrawer = props => {
	const [girl,setGirl] = useState([]);
	const [flaga,setFlaga] = useState(false);
	const [exampleChangeUser, setExampleChangeUser] = useState(1);

	const getData = async () => {
		try {
			  const response = await axios.get(AdresURL+'/Girlfriend').then((response) => {setGirl(response.data)});
			  setFlaga(true)
		} catch(error) {
		  console.error(error)
		}
	  }
	
	useEffect(() => {
		getData();
	}, [])
if(flaga == true){
  return (
    <View style={{flex: 1}} >
        <DrawerContentScrollView{...props}contentContainerStyle={{backgroundImage: 'White'}}>
			<ImageBackground source={require('../assets/bg.jpg')} style={{height:2000}}>
				 <Text style={styles.field}>Name: {girl[exampleChangeUser].name}</Text>
				 <Text style={styles.field}>Surname: {girl[exampleChangeUser].surname}</Text>
				 <Text style={styles.field}>Age: {girl[exampleChangeUser].age}</Text>
				 <Text style={styles.field}>Sex: {girl[exampleChangeUser].sex}</Text>
				 <Text style={styles.field}>Country: {girl[exampleChangeUser].country}</Text>
				 <Text style={styles.field}>Location: {girl[exampleChangeUser].location}</Text>
				 <Text style={styles.field}><FontAwesome name='facebook-official' size={15}/>  {girl[exampleChangeUser].facebook}</Text>
				 <Text style={styles.field}><FontAwesome name='twitter' size={15}/>  {girl[exampleChangeUser].twitter}</Text>
				 <Text style={styles.field}><FontAwesome name='instagram' size={15}/>  {girl[exampleChangeUser].instagram}</Text>
				 <Text style={styles.field}>Description: {girl[exampleChangeUser].description}</Text>
			</ImageBackground>
        </DrawerContentScrollView>		
    </View>
	
  );
}else{
	return(
		<Loader />
	)
}
}
const styles = StyleSheet.create({
  loader:{
	flex:1,
	alignItems: 'center',
    justifyContent: 'center',
  },

	field:{
	  	paddingTop:'5%',
		fontSize:15,
		color:'white',
		paddingLeft:'3%',
	},
});
export default CustomDrawer;