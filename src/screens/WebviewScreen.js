import React, { Component } from 'react'
import { View ,Text,ActivityIndicator} from 'react-native'
import { WebView } from 'react-native-webview';

const WebviewScreen=({navigation})=>{
    const webUrl = navigation.getParam("url",'')
    const renderLoadingView=()=> {
        return (
            <ActivityIndicator
                size="large" color="#38302a"
               hidesWhenStopped={true} 
            />
        )
        }

    return(
            <WebView
            source={{uri:webUrl}}
            renderLoading={renderLoadingView}
            startInLoadingState={true}
            />
          
    )

}

export default WebviewScreen;