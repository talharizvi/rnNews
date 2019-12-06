import {themes} from '../../constants/themes';

const initialState={
    theme:themes.light
}

const ThemeReducer=(state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_THEME":
            
            if(JSON.stringify(state.theme)===JSON.stringify(themes.dark)){
                return {...state,theme:themes.light}
            }else if(JSON.stringify(state.theme)==JSON.stringify(themes.light)){
                return {...state,theme:themes.dark}
            }
        default:return state  
    }
}

export default ThemeReducer