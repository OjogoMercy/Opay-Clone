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
        flex:1,
        backgroundColor:'#F9F9F9'
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
        backgroundColor: '#fff',
      },
      dash:{
        backgroundColor:'#00C26A',
        width:'100%',
        borderRadius:15,
        padding:20
      },
      bag:{
        padding:5,
        backgroundColor:'white',
        borderRadius:25,
        justifyContent:'center',
        height:30,
        width:90,
        alignItems:'center',
        marginTop:12
      },
      option: {
        alignItems: 'center',
      },
      iconBox: {
        backgroundColor: '#E6F9F2',
        borderRadius: 16,
        padding: 12,
        marginBottom: 6,
      },
      label: {
        fontSize: 13,
        color: '#222',
      },
      box1:{
        flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginTop:15,
    borderRadius:20,
    height:'14%'
      },
      tag: {
        position: 'absolute',
        top: 0,
        right: -20,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 5,
        padding: 2,
        fontSize: 8,
      },
      iconLabel: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
      },
      flex:{
        backgroundColor:'white',
        width:'100%',
        borderRadius:15,
        marginTop:20,
        padding:15,
        justifyContent:'space-between'
      },
      icon:{
        height:22,
        width:22
      },
      options:{
        alignItems:'center',
        width:80,
        marginTop:15
      },
      last:{
        flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width:'100%'
      },
      iconText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
      },
      con:{
        alignItems:'center'
      },
   
    
  });
  export default styles
  