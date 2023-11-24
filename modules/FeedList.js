import { Text, Card, Button,List, FAB, Appbar, Dialog, Portal, TextInput} from "react-native-paper";
import { View, StyleSheet, ScrollView, Linking} from "react-native";
import { FeedInputDialog } from "./FeedAddDialog";
//Linking.openURL("https://www.sdamned.com/comic/1111");


const exampleData ={
    "feedUrl": "https://www.sdamned.com/comic/rss",
    "paginationLinks": {
        "self": "https://www.sdamned.com/comic/rss"
    },
    "title": "Slightly Damned",
    "description": "Latest Slightly Damned comics and news",
    "link": "https://www.sdamned.com/",
    "language": "en-us"
}


import { useEffect, useState } from "react";
import { storeData, getData } from "./DataManager";
export function FeedList(){
    const [visible, setVisible] = useState(false);
    const [feeds, setFeeds] = useState([]);
    useEffect(()=> {
        getData('saved-feeds').then(data => {
            console.log(setFeeds);
            if(data !== undefined){
                setFeeds(JSON.parse(data))
            }
        
        })
        
    },[])


    const feedJSX = feeds.map(elem => {
        return(<FeedCard feed={elem} key={elem.link}></FeedCard>)
    });
    console.log(feedJSX)

    return(
        <View style={styles.view}> 
           
            <FeedInputDialog visible={visible} setVisible={setVisible}/>
            <Titlebar></Titlebar>
            <ScrollView>
            {feedJSX}
            </ScrollView>
            
            <FAB icon="plus" style={styles.fab} onPress={()=>setVisible(true)}>Add New Feed</FAB>
        </View>
    );
}


//<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

function FeedCard({feed}){
   
    return(
        <Card onPress={() => alert(`Should open the feed for ${feed.title}`)}>
        <Card.Title title={feed.title} subtitle={feed.description}/>
        </Card>
    );
}


function Titlebar(){
    return(
      <Appbar.Header>
      <Appbar.Content title="MobiRSS" />
    </Appbar.Header>
    );
  }


function FeedArticleList(){
    //all articles list for a feed
}

const styles = StyleSheet.create({
    view:{
        flex:1,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    card:{
        margin:16
    }
  })
  