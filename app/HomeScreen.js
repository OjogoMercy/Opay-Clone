import { StyleSheet, Text, View ,Image,FlatList} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import styles from '@/components/styles'
import rose from '../assets/images/ROSE.jpg'
import care from '../assets/images/icons8-customer-service-50.png'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';


const HomeScreen = () => {
  const transactions = [
    {
      id: '1',
      type: 'Transfer to OLOWOSILE TEMITO...',
      amount: '₦100.00',
      time: 'Mar 13th, 3:11:23 PM',
      status: 'Successful',
      icon: 'arrow-upward',
      iconBg: '#DFF5E1',
      iconColor: '#0BAF6D',
    },
    {
      id: '2',
      type: 'Auto-save to OWealth Balance',
      amount: '₦100.00',
      time: 'Mar 13th, 11:07:38 AM',
      status: 'Successful',
      icon: 'savings',
      iconBg: '#EFE6FB',
      iconColor: '#7D3EF0',
    },
  ];

  const TransactionItem = ({ item }) => (
    <View style={styles.container1}>
      <View style={[styles.iconWrapper, { backgroundColor: item.iconBg }]}>
        <MaterialIcons name={item.icon} size={20} color={item.iconColor} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.timestamp}>{item.time}</Text>
      </View>
      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
  );
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
      <FlatList
    data={transactions}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <TransactionItem item={item} />}
  />
    </View>
  )
}

export default HomeScreen
