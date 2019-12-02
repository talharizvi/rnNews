import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

const Technology=({navigation})=>{
    
    return(
    <CustomListView category="technology" navigation={navigation}/>)
}

export default Technology