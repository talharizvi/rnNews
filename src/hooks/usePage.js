import React, {useState, useEffect} from 'react';
import ListNews from '../api/ListNews';

const usePage = (category)=>{

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        fetchApi() 
    },[])


    const fetchApi=()=>{
        return ListNews(category,page)
        .then(result=>{
            if(result.status==200){
                const resultData = result.data.articles;
                setData([...data,...resultData])
                setPage(page+1)
        }
    })
    .catch(error=>console.log(error))
    }

    const loadMoreData=()=>{
        page<6?fetchApi():alert('no more pages')
    }

    return[data,loadMoreData]
}

export default usePage