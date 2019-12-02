import {createStore,applyMiddleware,combineReducers} from 'redux';
import ThemeReducer from '../store/reducers/ThemeReducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
//import loggerMiddleware from './middleware/logger'; 
import loggerMiddleware from 'redux-logger';
import fetchNewsReducer from '../store/reducers/FetchNewsReducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer=combineReducers({
    themeR:ThemeReducer,
    fetchNewsR:fetchNewsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


//let store = createStore(ThemeReducer)
let store = createStore(persistedReducer,applyMiddleware(loggerMiddleware,thunk))
export let persistor=persistStore(store)


export default store;