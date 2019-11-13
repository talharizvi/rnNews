import React, { Component } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview';

const WebviewScreen=(webUrl)=>{
    return(
        <View style={{flex:1}}>
            <WebView
            source={{uri:webUrl}}
            />
        </View>
       
    )
}

export default WebviewScreen;