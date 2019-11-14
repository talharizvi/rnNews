import React, { Component } from 'react'
import { View ,Text} from 'react-native'
import { WebView } from 'react-native-webview';

const WebviewScreen=({navigation})=>{
    const webUrl = navigation.getParam("url",'')
    return(
            <WebView
            source={{uri:webUrl}}
            />
    )
}

export default WebviewScreen;