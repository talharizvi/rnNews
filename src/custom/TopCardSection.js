import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';


const TopCardSection=(props)=>{
    return(
            <View style={[styles.cardStyle,{backgroundColor:props.backgroundColor}]} >
                {props.children}
            </View>
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


export default TopCardSection

