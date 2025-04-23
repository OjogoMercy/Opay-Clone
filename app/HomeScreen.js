import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import styles from '@/components/styles'
import rose from '../assets/images/ROSE.jpg'
import care from '../assets/images/icons8-customer-service-50.png'
import { MaterialCommunityIcons,MaterialIcons,Ionicons,FontAwesome5,FontAwesome } from '@expo/vector-icons';



const HomeScreen = () => {
  const transactions = [
    {
      id: '1',
      type: 'Transfer to OLOWOSILE TEMITO..',
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
  const services = [
    { name: 'Airtime', icon:require('../assets/images/icons8-mobile-network-66.png'), tag: 'Up to 6%' },
    { name: 'Data', icon: require('../assets/images/icons8-mobile-data-66.png'), tag:'Up to 6%' },
    { name: 'Betting', icon:require('../assets/images/icons8-football-50.png')},
    { name: 'TV', icon: require('../assets/images/icons8-tv-show-50.png') },
    { name: 'OWealth', icon: require('../assets/images/icons8-16-piggy-bank-58.png') },
    { name: 'Loan', icon: require('../assets/images/icons8-loan-64.png') },
    { name: 'Play4aChild', icon: require('../assets/images/icons8-charity-50.png') },
  ];
  
  const ServiceIcon = ({ name, icon, tag }) => (
    <TouchableOpacity style={styles.options}>
        <View style={[styles.iconBox,{justifyContent:'space-around',borderRadius:30,padding:10,}]}>
      <Image source={icon} style={styles.icon} />
      {tag && <Text style={styles.tag}>{tag}</Text>}
    </View>
    <Text style={styles.label}>{name}</Text>
    </TouchableOpacity>
    
  );

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
    <><View style={styles.contain}>
      <StatusBar backgroundColor={'#f9f9f9'} />
      <View style={styles.row}>
        <View style={styles.row}>
          <Image source={rose} style={styles.profile} />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Hi, Mercy</Text>
        </View>
        <View style={styles.row1}>
          <Image style={{ height: 20, width: 20 }} source={care} />
          <Text style={styles.small}>HELP</Text>
          <MaterialCommunityIcons name="line-scan" size={20} color="black" />
          <MaterialCommunityIcons name="bell-outline" size={22} color="black" />
        </View>
      </View>
      <View style={styles.dash}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='shield-checkmark' size={18} color="white" />
          <Text style={{ color: 'white' }}> Available Balance </Text>
          <Ionicons name='eye' size={18} color="white" />
          <Text style={{ color: 'white', marginLeft: 20 }}>Transaction History > </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginTop: 10 }}>#0.00 ></Text>
          <TouchableOpacity style={styles.bag}>
            <Text style={{ color: '#00c26a', fontSize: 12, fontWeight: 'bold' }}>+Add money</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          style={{ backgroundColor: 'white', borderRadius: 15, marginTop: 20 }}
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionItem item={item} />} />
      </View>
      <View style={styles.box1}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconBox}>
            <MaterialIcons name="person-outline" size={22} color="#0AA06E" />
          </View>
          <Text style={styles.label}>To OPay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconBox}>
            <FontAwesome5 name="university" size={20} color="#0AA06E" />
          </View>
          <Text style={styles.label}>To Bank</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconBox}>
            <MaterialIcons name="open-in-new" size={22} color="#0AA06E" />
          </View>
          <Text style={styles.label}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => <ServiceIcon {...item} />}
        contentContainerStyle={styles.flex} />
    </View><View style={styles.last}>
        <TouchableOpacity style={styles.con}>
          <FontAwesome name="dot-circle-o" size={22} color="green" />
          <Text style={[styles.iconText, { color: 'green' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con}>
          <MaterialIcons name="card-giftcard" size={22} color="#999" />
          <Text style={styles.iconText}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con}>
          <MaterialIcons name="insert-chart-outlined" size={22} color="#999" />
          <Text style={styles.iconText}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con}>
          <FontAwesome name="credit-card" size={22} color="#999" />
          <Text style={styles.iconText}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con}>
          <Ionicons name="person-circle-outline" size={27} color="#999"/>
          <Text style={styles.iconText}>Me</Text>
        </TouchableOpacity>
      </View></>
  )
}

export default HomeScreen
