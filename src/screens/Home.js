import React,{useState,useEffect,useRef,useCallback} from 'react';
import {
    View,
    Text,FlatList,Image,TouchableOpacity,ActivityIndicator,SafeAreaView,Button,ScrollView,RefreshControl
  } from 'react-native';
import axios from 'axios';
import TopCardSection from '../custom/TopCardSection';
import CardSection from '../custom/CardSection';
import { connect } from "react-redux";
import { FloatingAction } from "react-native-floating-action";
import NetInfo from "@react-native-community/netinfo";

const categoryData=[
    {
        name:'Health',
        image:require('../res/images/icons8-fire-100.png'),
        background:'#1bd2f2'
    },
    {
        name:'Business',
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

const floatingMenu=[
    {
        text: "Theme",
        icon: require('../res/images/icons8-fire-100.png'),
        name: "switch_theme",
        position: 1
      },
]

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }


const Home=({navigation,props,theme})=>{
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        
        wait(2000).then(() => CheckConnectivity(),
        setRefreshing(false));
      }, [refreshing]);
    
    const [latestData,setLatestData]=useState([])
    const [date,setDate]=useState('')
    // const floatingAction = useRef()
    const handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
          "connectionChange",
          handleFirstConnectivityChange
        );
    
        if (isConnected === false) {
          alert("You are offline!");
        } else {
          fetchNews()
          alert("You are online!");
        }
      };

    const CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
          NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
              alert("You are online!");
              fetchNews()
            } else {
              alert("You are offline!");
            }
          });
        } else {
          // For iOS devices
          NetInfo.isConnected.addEventListener(
            "connectionChange",
           handleFirstConnectivityChange
          );
        }
      };

     const fetchNews=()=>{
        var d = new Date();
        var n = d.toString()
        var res = n.split(" ")
        console.log(res)
        const date = res[2]+" "+res[1]+" "+res[0] 
         setDate(date)
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7')
        .then(response=>{
            console.log(response.data.articles)
            setLatestData(response.data.articles)
        })
        .catch(error=>{
            console.log(error)
        })
     }

    useEffect(()=>{
        CheckConnectivity()
        // fetchNews()
      
        // var d = new Date();
        // var n = d.toString()
        // var res = n.split(" ")
        // console.log(res)
        // const date = res[2]+" "+res[1]+" "+res[0] 
        //  setDate(date)
        // axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac659059bcc34c4b9c74dfa215ff2eb7')
        // .then(response=>{
        //     console.log(response.data.articles)
        //     setLatestData(response.data.articles)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
    },[])
    
    const setTopImage=(item)=>{
        return(
            item.urlToImage!=null?
            <TopCardSection  backgroundColor='#000'>
            <Image source={{uri:item.urlToImage}} style={{width:200,height:200}}></Image>
            </TopCardSection>
            :
            <TopCardSection>
            <Image 
            style={{width:200,height:200}}
            source={require('../res/images/placeholder-image-icon.jpg')}></Image>
            </TopCardSection>
        )
    }

    const setNewsImage=(item)=>{
        return(
            item.urlToImage!=null?
            <TopCardSection>
            <Image source={{uri:item.urlToImage}} style={{width:90,height:90}}></Image>
            </TopCardSection>
            :
            <TopCardSection>
            <Image 
            style={{width:90,height:90}}
            source={require('../res/images/placeholder-image-icon.jpg')}></Image>
            </TopCardSection>
        )
    }

    return(
     latestData.length>0?
     <SafeAreaView style={{flex:1}}>
     <ScrollView style={{flex:1}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>       
     <View style={{flex:1}}>
    
     <Text style={{fontSize:15,fontWeight:'bold'}}>{date}</Text>
     
     <View style={{flex:1}}>
         <FlatList
             data={latestData.slice(0,5)}
             renderItem={({item})=>
             <TouchableOpacity onPress={()=>navigation.navigate('WebViewScreen',{url:item.url})}>
             <View style={{flexDirection:'column',width:200,column:200}}>
           {setTopImage(item)} 
                
                 <TopCardSection>
                 <Text style={{flex:1,fontSize:15,fontWeight:'bold',position:'absolute',bottom:50,borderRadius:4,backgroundColor:'#ccc',marginHorizontal:5,opacity:0.5}}>{item.title}</Text>
                 </TopCardSection>
             </View>
             </TouchableOpacity>
             }
             horizontal
             style={{marginBottom:5}}
             keyExtractor={(item, index) => index.toString()}
         />
     </View>
     
     <Text style={{fontSize:20,marginLeft:5,marginBottom:5,fontWeight:'bold'}}>Top Categories</Text>
     <View>
     <FlatList 
         data={categoryData}
         renderItem={({item})=>
         <TouchableOpacity onPress={()=>navigation.navigate(item.name)}>
         <TopCardSection  backgroundColor={item.background} >
         <View style={{marginHorizontal:10}}>
           
             <Image
             style={{width: 60, height: 60}}
             source={item.image}>
             </Image>
             <Text style={{alignSelf:'center',fontWeight:'bold'}}>{item.name}</Text>
             
         </View>
         </TopCardSection>
         </TouchableOpacity>
         }

         horizontal
         keyExtractor={(item, index) => index.toString()}
         style={{marginBottom:10}}
     />
     <Text style={{fontSize:20,marginLeft:5,marginBottom:5,marginTop:5,fontWeight:'bold'}}>Latest News</Text>
     </View>

     <View style={{flex:2.5}}>
     <FlatList
        
         data={latestData.slice(5,latestData.length)}
         renderItem={({item})=>
        
        <TouchableOpacity onPress={()=>navigation.navigate('WebViewScreen',{url:item.url})}>
       <CardSection>
         <View style={{flexDirection:'row',marginVertical:5,backgroundColor:theme.background}}>
             {setNewsImage(item)}
             <Text style={{flex:1,fontSize:15,fontWeight:'bold',color:theme.text}}>{item.title}</Text>
         </View>
        </CardSection>
        </TouchableOpacity> 
        
         }
         keyExtractor={(item, index) => index.toString()}
     />
     </View>
     <FloatingAction
              //  ref={(ref) => floatingAction = ref}
                actions={floatingMenu}
                position="right"
                onPressItem={name=>{
                    navigation.navigate('Theme')
        }}
    /> 
 </View>
 </ScrollView>
 </SafeAreaView>
    :
    <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }> 
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator size="large" color="#38302a" />
    </View>
    </ScrollView>
    </SafeAreaView>
    )

    
}

const mapStateToProps=(state)=>{
    console.log("mapStateToProps",state)
    return{
        theme:state.theme
    }
    
};

export default connect(mapStateToProps)(Home)