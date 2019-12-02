import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

const Business=({navigation})=>{

    return(
    <CustomListView category="business" navigation={navigation}/>)
}

export default Business
