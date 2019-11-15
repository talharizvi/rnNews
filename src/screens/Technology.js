import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import TopCardSection from '../custom/TopCardSection';

var page = 1;
const Technology=({navigation})=>{
    const[techData,setData]=useState([]) 
   

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7&category=technology&pageSize=10&page=${page}`)
        .then(response=>{
            console.log(response)
            setData(response.data.articles)
        })
    },[])

    const loadNextNews=()=>{
        console.log("inside load next news")
        page = page+1
        console.log(page)
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7&category=technology&pageSize=10&page=${page}`)
        .then(response=>{
            console.log("next NEWS",response)
            setData([...techData,...response.data.articles])
        })
    }

    const setNewsImage=(item)=>{
        return(
            item.urlToImage!=null?
            <TopCardSection>
            <Image source={{uri:item.urlToImage}} style={{width:90,height:90}}></Image>
            </TopCardSection>
            :
            <TopCardSection >
            <Image 
            style={{width:90,height:90}}
            source={require('../res/images/placeholder-image-icon.jpg')}></Image>
            </TopCardSection>
        )
    }

    return(
   // console.log("#######",techData),
    <View>
        
        <FlatList
            data={techData}
            renderItem={({item})=> 
            <TouchableOpacity onPress={()=>navigation.navigate('WebViewScreen',{url:item.url})}> 
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:5, borderRadius:8,
            borderWidth: 1,borderColor: '#000000',paddingVertical:5}}>
            {setNewsImage(item)}
            <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
        </View>
        </TouchableOpacity>
        }
        // keyExtractor={item => item.id.toString()}
            onEndReached={()=>
               console.log("end reached"),
               loadNextNews
            }

        />
    </View>)
}

export default Technology