import React, { useState, useEffect, useRef  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
<Text>{tab[1]}</Text>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
		
		<TouchableOpacity style={styles.button} onPress={_takePhoto}>
			<MaterialIcons name='camera' size={50} color={"lime"}/>
		  </TouchableOpacity>
		  
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialIcons name='flip-camera-ios' size={50} color={"lime"}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
	flex:1,
    borderWidth:3,
	borderColor:"gold",
	justifyContent: 'flex-end',
	
  },
  button: {
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth:3,
	borderColor:"red",
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default TakePhoto;