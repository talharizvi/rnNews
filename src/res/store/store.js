import {createStore,} from 'redux';
import ThemeReducer from '../store/reducers/ThemeReducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

// const rootReducer=(state,action)=>{
//     return themeReducer(state,action)
// }

const persistedReducer = persistReducer(persistConfig, ThemeReducer)


//let store = createStore(ThemeReducer)
let store = createStore(persistedReducer)
export let persistor=persistStore(store)


export default store;