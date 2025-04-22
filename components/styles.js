import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding:15,
      backgroundColor: '#00C26A',
      alignItems:'center'
    },
    image: {
      width: 90,
      height: 90,
      borderRadius:100,
      resizeMode: 'contain',
      alignSelf:'center',
      marginBottom:15
    },
      text:{
        color:'#1A1944',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:35
      },
      contain:{
        padding:10,
        flex:1
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
      },

      small:{
        color:'red',
        fontWeight:'bold',
        backgroundColor:'pink',
        fontSize:6,
        position:'absolute',
        top:-1,
        left:13
      },
        row1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'40%'
      },
      profile:{
        height:38,
        width:38,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white'
      },
      iconWrapper: {
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
      },
      textWrapper: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontWeight: '500',
        fontSize: 14,
        color: '#222',
      },
      timestamp: {
        fontSize: 12,
        color: '#999',
      },
      amountWrapper: {
        alignItems: 'flex-end',
      },
      amount: {
        fontWeight: '600',
        fontSize: 14,
        color: '#000',
      },
      status: {
        fontSize: 12,
        color: 'green',
      },
      container1: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      },
    
   
    
  });
  export default styles
  