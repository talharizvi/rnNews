import React,{useEffect,useState} from 'react';
import {View,Text,SafeAreaView,Button} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const test=()=>{

    const handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
          "connectionChange",
          handleFirstConnectivityChange
        );
    
        if (isConnected === false) {
          alert("You are offline!");
        } else {
          alert("You are online!");
        }
      };


    const CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
          NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
              alert("You are online!");
            } else {
              alert("You are offline!");
            }
          });
        } else {
          // For iOS devices
          NetInfo.isConnected.addEventListener(
            "connectionChange",
           handleFirstConnectivityChange
          );
        }
      };

     


    return(
    // <SafeAreaView>
    <View style={{backgroundColor:'#ggg'}}>
        <Text>Test</Text>
        <Button  title="Press me" onPress={()=>
        alert('qweert'),
        CheckConnectivity}/>
        <Button title="test" onPress={()=>alert("afdada")}/>
    </View>
    // </SafeAreaView>
    )
}

export default test