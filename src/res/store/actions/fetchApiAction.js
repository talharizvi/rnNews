const fetchApiAction=(result)=>{
    return{
        type:"FETCH_NEWS_API",
        payload:result
    }
}

export default fetchApiAction