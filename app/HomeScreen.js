import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import styles from '@/components/styles'
import rose from '../assets/images/ROSE.jpg'
import care from '../assets/images/icons8-customer-service-50.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <View style={styles.contain}> 
      <StatusBar backgroundColor={'#fff'}/>
      <View style={styles.row}>
        <View style={styles.row}>
        <Image source={rose} style={styles.profile}/>
        <Text style={{fontSize:16,marginLeft:10}}>Hi, Mercy</Text>
        </View>
        <View style={styles.row1}>
        <Image style={{height:20,width:20}} source={care}/>
        <Text style={styles.small}>HELP</Text>
        <MaterialCommunityIcons name="line-scan" size={20} color="black" />
        <MaterialCommunityIcons name="bell-outline" size={22} color="black" />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
