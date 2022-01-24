import React, {useState, useEffect} from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import { NativeBaseProvider, HStack, Avatar,  Actionsheet, useDisclose, Box, Icon,Slide, Center,Button,Spinner,Heading} from 'native-base';
import {AdresURL} from '../App.js';
import Loader from '../components/Loader.js';
import axios from 'axios';

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
				 <Text>{girl[exampleChangeUser].name}</Text>
				 <Text>{girl[exampleChangeUser].surname}</Text>
				 <Text>{girl[exampleChangeUser].age}</Text>
				 <Text>{girl[exampleChangeUser].sex}</Text>
				 <Text>{girl[exampleChangeUser].country}</Text>
				 <Text>{girl[exampleChangeUser].location}</Text>
				 <Text>{girl[exampleChangeUser].facebook}</Text>
				 <Text>{girl[exampleChangeUser].twitter}</Text>
				 <Text>{girl[exampleChangeUser].instagram}</Text>
				 <Text>{girl[exampleChangeUser].description}</Text>
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
});
export default CustomDrawer;