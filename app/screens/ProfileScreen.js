import * as React from 'react';
import { NativeBaseProvider, HStack, Avatar} from 'native-base';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {user} from './HomeScreen'

const currentColor = 'yellow'
const nonColor = 'white'

export const Example = () => {
  return (
    <HStack space={2}>
      <Avatar size="2xl" source={user[3].uri}>Zdjecie</Avatar>
	</HStack>
	)
}

const ProfileScreen = ({ navigation }) => {
  return (
  <NativeBaseProvider>
    <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.account}>
			<View style={styles.inAccount}>
				<Example/>
				<Text style={{fontSize:20, paddingTop:10,}}>
					{user[3].name},
					{user[3].age}
				</Text>
				<View style={styles.buttony}>
					<TouchableOpacity>
						<Text style={styles.buttonStyle}>
							<FontAwesome name='camera' size={35}/>
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.buttonStyle}>
							<FontAwesome name='circle' size={35}/>
						</Text>
					</TouchableOpacity>
				</View>
			
			</View>
			<ScrollView>
				<View style={styles.inAccount2}>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, libero nec venenatis iaculis, leo neque tempor mi, sed dignissim dui tortor et metus. Sed mattis, odio vel placerat blandit, ante arcu vestibulum massa, a volutpat ipsum dolor in metus. Cras suscipit pellentesque molestie. Nam consectetur, mauris eget hendrerit posuere, purus magna volutpat nunc, eget interdum purus nulla tempus arcu. Nulla venenatis lorem enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis lacus, luctus eget nisi non, consectetur varius sapien. Nunc molestie scelerisque magna, a elementum dolor fermentum placerat. Pellentesque consectetur turpis id ante auctor, ut consequat sapien porttitor. Nulla laoreet mi ligula, eu fermentum nunc dapibus et.Aliquam facilisis nunc sit amet dolor pharetra tristique. Mauris at nulla semper, pharetra nulla nec, eleifend nisi. Cras malesuada velit nec lacus lacinia, at tempus arcu consequat. Nunc sem nulla, ultricies non fermentum at, pellentesque ac nisl. Curabitur vel rutrum nunc. Ut suscipit sem lacus, sed molestie elit efficitur a. Phasellus aliquam leo ac gravida laoreet. Donec at sem a nisl feugiat accumsan. Suspendisse tempor sed purus ac porttitor. Vestibulum pharetra, ante vitae scelerisque commodo, ex orci venenatis urna, efficitur porttitor nulla est id nulla. Fusce pretium a urna non placerat. Suspendisse vestibulum arcu nunc, vel euismod turpis dapibus sit amet. Etiam eget libero odio.

						Fusce sapien eros, mollis id tincidunt a, mollis sed lectus. In nec ligula interdum, consectetur augue at, lobortis metus. Fusce non tincidunt leo, ut venenatis diam. Suspendisse potenti. Donec vulputate iaculis nunc vel vehicula. Quisque pellentesque erat et tincidunt maximus. Fusce aliquet est enim, non cursus purus aliquam in. Fusce purus sapien, mattis sit amet feugiat at, dapibus at metus. Phasellus lobortis fermentum scelerisque. In vel enim lobortis, pretium urna id, tincidunt diam. Maecenas quis erat venenatis, tincidunt nunc eu, viverra libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget nibh in lorem pellentesque pretium ut nec lacus.

						Praesent ut vulputate quam, vel posuere velit. Curabitur facilisis sodales ex, eget tempus augue lacinia vitae. Proin ac eleifend nisl. Vestibulum faucibus elit ut arcu dignissim rutrum. Etiam vel mollis ligula. Nam non accumsan turpis. Vestibulum sollicitudin nisi vel enim mollis, id vehicula sem molestie. Curabitur metus tellus, scelerisque id felis vel, feugiat pharetra enim. Sed ligula leo, ullamcorper non nisi in, hendrerit dapibus enim. Morbi eu tincidunt enim, eget facilisis nulla. Sed malesuada vel ante quis sollicitudin. Donec orci dui, sollicitudin at metus et, volutpat facilisis augue. Fusce interdum ultricies blandit.
					</Text>
					
					<Text>
							<FontAwesome name='instagram' size={35}/> DanielS
					</Text>
					
					<Text>
							<FontAwesome name='facebook' size={35}/> DanielS
					</Text>
					
					<Text>
							<FontAwesome name='twitter' size={35}/> DanielS
					</Text>
					
				</View>
			</ScrollView>
		</View>
	
	{/*--------------------------------------FOOTER--------------------------------------*/}
		<View style={styles.footer}>
			<View style={styles.footer_button}>
			<TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('HomeScreen')}>
				<FontAwesome name='home' size={35}/>
			</TouchableOpacity>
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
				<FontAwesome name='comments' size={35}/>
			</TouchableOpacity>	
		</View>

		<View style={styles.footer_button}>
			<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
				<FontAwesome name='user' size={35}
				color={navigation.navigate === 'ChatScreen' ? nonColor : currentColor 
				}/>
			</TouchableOpacity>
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
  footer:{
	justifyContent:'center',
	alignItems: 'center',
	flex:3,
	borderWidth:3,
	borderColor: "blue",
	flexDirection: "row",
	backgroundColor:"gray",
	justifyContent: "space-around",
  },
  
  account:{
	borderWidth:4,
	borderColor:'gold',
	height:"90%",
  },
  
  inAccount:{
	borderWidth:4,
	borderColor:'red',
	height:"50%",
	alignItems: 'center',
	borderBottomLeftRadius:200,
	borderBottomRightRadius:200,
  }, 
  
  inAccount2:{
	borderWidth:4,
	borderColor:'green',
	justifyContent:'center',
	alignItems: 'center',
  },
  
   buttony:{
    borderWidth:4,
	borderColor:'lime',
	flexDirection:"row",
	padding:10,
	width:"100%",
	justifyContent:'space-around',
	alignItems: 'center',
  },
  
  buttonStyle:{
    borderWidth:4,
	borderColor:'blue',
	backgroundColor:'grey',
	borderRadius:200,
	padding:10,
	justifyContent:'center',
	alignItems: 'center',
  },
});

export default ProfileScreen;