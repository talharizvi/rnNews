import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

const Health=({navigation})=>{

    return(
    <CustomListView category="health" navigation={navigation}/>)
}
export default Health
