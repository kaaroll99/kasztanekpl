import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Spinner, HStack,Heading,Center,NativeBaseProvider,} from "native-base"

const Loader = () => {
	
  return (
	<View style={styles.loader}>
		<HStack space={2} alignItems="center">
			<Spinner accessibilityLabel="Loading posts" color="#3040B3" size="lg" />
			<Heading color="#3040B3" fontSize="lg">Loading</Heading>
		</HStack>
	</View>
  );
}
const styles = StyleSheet.create({
	loader:{
	flex:1,
	alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loader;