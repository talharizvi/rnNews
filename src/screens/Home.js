import React,{useState,useEffect} from 'react';
import {
    View,
    Text,FlatList,Image
  } from 'react-native';
import axios from 'axios';
import Card from '../custom/Card';

const categoryData=[
    {
        name:'Trending',
        image:require('../res/images/icons8-fire-100.png'),
        background:'#1bd2f2'
    },
    {
        name:'Top Stories',
        image:require('../res/images/icons8-star-100.png'),
        background:'#f2a01b'
    },
    {
        name:'Sports',
        image:require('../res/images/icons8-sports-mode-100.png'),
        background:'#e88976'
    },
    {
        name:'Entertainment',
        image:require('../res/images/icons8-news-100.png'),
        background:'#664156'
    },
    {
        name:'Technology',
        image:require('../res/images/icons8-technology-lifestyle-100.png'),
        background:'#63eb82'
    }
]



const Home=()=>{

    const [latestData,setLatestData]=useState([])
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7')
        .then(response=>{
            console.log(response.data.articles)
            setLatestData(response.data.articles)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    
    const setNewsImage=(item)=>{
        return(
            item.urlToImage!=null?
            <Card backgroundColor='#000'>
            <Image source={{uri:item.urlToImage}} style={{width:90,height:90}}></Image>
            </Card>
            :
            <Card >
            <Image 
            style={{width:90,height:90}}
            source={require('../res/images/placeholder-image-icon.jpg')}></Image>
            </Card>
        )
    }

    return(
        console.log(latestData),
        <View style={{flex:1}}>
            
            <Text style={{fontSize:20,marginLeft:5,marginBottom:5,fontWeight:'bold'}}>Top Categories</Text>
            <View>
            <FlatList 
            
                data={categoryData}
                renderItem={({item})=>
                <Card backgroundColor={item.background}>
                <View style={{marginHorizontal:10}}>
                  
                    <Image
                    style={{width: 60, height: 60}}
                    source={item.image}>
                    </Image>
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>{item.name}</Text>
                    
                </View>
                </Card>
                }

                horizontal

                style={{marginBottom:10}}
            />
            <Text style={{fontSize:20,marginLeft:5,marginBottom:5,marginTop:5,fontWeight:'bold'}}>Latest News</Text>
            </View>

            <View style={{flex:2.5}}>
            <FlatList
               
                data={latestData}
                renderItem={({item})=>
                <Card >
                <View style={{flexDirection:'row',marginVertical:5}}>
                    {setNewsImage(item)}
                    <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
                </View>
                 </Card>
                }
            />
            </View>
        </View>
    )
} 

export default Home