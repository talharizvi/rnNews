import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

var page = 1;
const Business=({navigation})=>{
    const[data,setData]=useState([]) 

    useEffect(()=>{
        ListNews("business",page).then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    return(
    <CustomListView category="business" navigation={navigation}/>)
}

export default Business
