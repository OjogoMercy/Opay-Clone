import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import logo from '../assets/images/download (11).jpg'
import { StatusBar } from 'react-native';
import styles from './../components/styles';

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); 
    }, 4000);

    return () => clearTimeout(timer);   
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#00C26A'}/>
        <Image style={styles.image} source={logo}/>
        <Text style={styles.text}>We Are Beyond Banking</Text>
        <Text style={{color:'#1A1944'}}>Licensed by the <Text style={{fontWeight:'bold'}}>CBN</Text> and insured by the <Text style={{fontWeight:'bold'}}>NDIC</Text></Text>
    </View>
  );
};

export default IntroScreen;
