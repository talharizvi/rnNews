import React, {useState, useEffect} from 'react';
import {View,FlatList,ActivityIndicator,TouchableOpacity,Image,Text} from 'react-native';
import usePage from '../hooks/usePage';
import TopCardSection from '../custom/TopCardSection';

 const CustomListView=({navigation,category})=>{

    const[data,loadMoreData] = usePage(category)    

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
        <View>
        <FlatList
            data={data}
            renderItem={({item})=> 
            <TouchableOpacity onPress={()=>navigation.navigate('WebViewScreen',{url:item.url})}> 
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:5, borderRadius:8,
            borderWidth: 1,borderColor: '#000000',paddingVertical:5}}>
            {setNewsImage(item)}
            <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
        </View>
        </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()}
        
            onEndReached={()=>
               console.log("end reached"),
               loadMoreData
            }
            onEndReachedThreshold='.5'
            ListFooterComponent={()=>
                <ActivityIndicator size="large" color="#38302a"/>
            }
        />
    </View>
    )    
}

export default CustomListView