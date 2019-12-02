import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

const Sports=({navigation})=>{

    return(
    <CustomListView category="sports" navigation={navigation}/>)
}
export default Sports