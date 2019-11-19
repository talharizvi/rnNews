import React,{useEffect,useState} from 'react';
import axios from 'axios';

 const ListNews=async(category,page)=>{
      let result=null  
      await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7&category=${category}&pageSize=10&page=${page}`)
        .then(response=>{
            console.log(response)
            result=response
        })
        .catch(error=>console.log(error))
        return result
}

export default ListNews