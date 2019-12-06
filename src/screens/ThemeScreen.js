import React,{useEffect,useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {connect} from 'react-redux';
import {switchTheme} from '../res/store/actions/themeAction'


const ThemeScreen=({theme,changeTheme})=>{

    console.log(theme)
    return(
        <View>
            <TouchableOpacity onPress={()=>changeTheme()}>
            <Text style={{fontSize:20, backgroundColor:theme.background}}>Change Theme</Text>
            </TouchableOpacity>
        </View>
        )
}

const mapStateToProps=(state)=>{
    console.log("mapStateToProps",state)
    return{
        theme:state.themeR.theme
    }
    
};

const mapDispatchToProps=(dispatch)=>{
    console.log("dispacth",dispatch)
    return{
        changeTheme:()=>{
            console.log("insied mapDispatch")
            dispatch(switchTheme())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeScreen)
