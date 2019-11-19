import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

var page = 1;
const Technology=({navigation})=>{
    const[data,setData]=useState([]) 

    useEffect(()=>{
        ListNews("technology",page).then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    return(
    <CustomListView category="technology" navigation={navigation}/>)
}

export default Technology