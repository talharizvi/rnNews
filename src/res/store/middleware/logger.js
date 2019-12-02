import React from 'react';
import { Text, View } from 'react-native';

const logger = ({getState,dispatch}) =>next=>action=>{
    console.log(action)
     next(action)
    console.log(action)
}

export default logger;
