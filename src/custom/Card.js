import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';


const Card=(props)=>{
    return(
        // <TouchableOpacity onPress={()=>{props.navigation.navigate('WebViewScreen')}}>
            <View style={[styles.cardStyle,{backgroundColor:props.backgroundColor}]} >
                {props.children}
            </View>
        // </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    cardStyle:{
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal:5,
        backgroundColor:'#fff'
    }
})


export default Card

