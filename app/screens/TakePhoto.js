import React, { useState, useEffect, useRef  } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export const tab = []

const TakePhoto = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [image, setImage]= useState(null);
	const ref = useRef(null)

	  useEffect(() => {
		(async () => {
		  const { status } = await Camera.requestCameraPermissionsAsync();
		  setHasPermission(status === 'granted');
		})();
	  }, []);

		const _takePhoto = async () => {
			const photo = await ref.current.takePictureAsync()
			setImage(photo.uri)
			tab.push(photo.uri)
			console.debug(photo)
		}

	  if (hasPermission === null) {
		return <View />;
	  }
	  if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	  }
	  
	  
  return (

	 <View style={styles.container}>
		 <StatusBar barStyle="light-content" />
<Text>{tab[1]}</Text>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>

			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					setType(
						type === Camera.Constants.Type.back
							? Camera.Constants.Type.front
							: Camera.Constants.Type.back
					);
				}}>
				<MaterialIcons name='flip-camera-ios' size={40} color={"white"}/>
			</TouchableOpacity>

		<TouchableOpacity style={styles.button_take} onPress={_takePhoto}>
			<MaterialIcons name='camera' size={50} color={"white"}/>
		  </TouchableOpacity>
		  

        </View>
      </Camera>
    </View>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  paddingTop:'10%',
	  paddingBottom:'10%',
	  backgroundColor:'black',

  },
  camera: {
    flex: 1,
	  borderRadius:20,
  },
  buttonContainer: {
	flex:1,
	justifyContent: 'flex-end',
	
  },
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth:1,
		width:'15%',
		height:'8%',
		flex:1,
		position:"absolute",
		bottom:'91%',
		left:'2%',
		borderRadius:50,
		backgroundColor:'#3040B388',
		borderColor:"white",
	},
  button_take: {
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth:1,
	  width:'15%',
	  height:'8%',
	  flex:1,
	  position:"absolute",
	  top:'91%',
	  left:'42%',
	  borderRadius:50,
	  backgroundColor:'#3040B388',
	  borderColor:"white",
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default TakePhoto;