import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

var page = 1;
const Entertainment=({navigation})=>{
    const[data,setData]=useState([]) 

    useEffect(()=>{
        ListNews("entertainment",page).then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    return(
    <CustomListView category="entertainment" navigation={navigation}/>)
}
export default Entertainment
