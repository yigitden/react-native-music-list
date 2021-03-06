import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        flex:1
    },
    inner_container:{
        padding:10,
        justifyContent:'center',
        flex:1
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black'
    },
    info:{
        flexDirection:'row', 
    },
    artist:{
        fontWeight:'bold', 
        color:'black'
    },
    year:{
        marginLeft:10,
        color:'gray',
        fontWeight:'bold'
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    soldout_title:{
        color:'red', 
        fontSize:12, 
        fontWeight:'bold'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})