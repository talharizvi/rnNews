import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";

const CardSection=(props)=>{
    return(
        <View style={[styles.cardStyle,{backgroundColor:props.theme.background}]} >
                {props.children}
            </View>
    )
}

const styles=StyleSheet.create({
    cardStyle:{
        marginVertical:3,
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal:5,
        backgroundColor:'#cf3a3a'
    }
})

const mapStateToProps=(state)=>{
    //console.log("mapStateToProps",state)
    return{
        theme:state.themeR.theme
    }
    
};
export default connect(mapStateToProps)(CardSection) 

