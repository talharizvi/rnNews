import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';


const Card=(props)=>{
    return(
        <TouchableOpacity onPress={()=>props.nav.navigate('WebViewScreen',{url:props.webUrl})}>
            <View style={[styles.cardStyle,{backgroundColor:props.backgroundColor}]} >
                {props.children}
            </View>
         </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    cardStyle:{
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal:5,
        backgroundColor:'#fff'
    }
})


export default Card
