import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

var page = 1;
const Health=({navigation})=>{
    const[data,setData]=useState([]) 

    useEffect(()=>{
        ListNews("health",page).then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    return(
    <CustomListView category="health" navigation={navigation}/>)
}
export default Health
