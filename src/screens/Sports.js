import React,{useEffect,useState} from 'react';
import ListNews from '../api/ListNews';
import CustomListView from '../custom/CustomListView';

var page = 1;
const Sports=({navigation})=>{
    const[data,setData]=useState([]) 

    useEffect(()=>{
        ListNews("sports",page).then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    return(
    <CustomListView category="sports" navigation={navigation}/>)
}
export default Sports