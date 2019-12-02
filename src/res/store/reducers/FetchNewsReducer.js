
const initialState={
    list:[]
}

const fetchNewsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_NEWS_API":return {...state,list:action.payload};
        default: return state;
    }
}

export default fetchNewsReducer