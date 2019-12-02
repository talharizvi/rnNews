import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

const Entertainment=({navigation})=>{

    return(
    <CustomListView category="entertainment" navigation={navigation}/>)
}
export default Entertainment
