import { Text, Card, Button,List, FAB, Appbar, Dialog, Portal, TextInput} from "react-native-paper";
import { View, StyleSheet, ScrollView, Linking} from "react-native";
import { FeedInputDialog } from "./FeedAddDialog";
import { useState } from "react";
import { storeData, getData } from "../modules/DataManager";
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



export function FeedList({feedList, setter}){
    const [visible, setVisible] = useState(false);
    
 

    const feedJSX = feedList.map(elem => {
        return(<FeedCard feed={elem} key={elem.link} setter={setter}></FeedCard>)
    });
    console.log(feedJSX)

    return(
        <View style={styles.view}> 
           
            <FeedInputDialog feedList={feedList} visible={visible} setVisible={setVisible}/>
            <Titlebar></Titlebar>
            <ScrollView>
            {feedJSX}
            </ScrollView>
            
            <FAB icon="plus" style={styles.fab} onPress={()=>setVisible(true)}>Add New Feed</FAB>
        </View>
    );
}


//<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

function FeedCard({feed, setter}){
   
    return(
        <Card onPress={() => setter(feed)}>
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
  