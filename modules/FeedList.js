import { Text, Card, Button,List, FAB, Appbar} from "react-native-paper";
import { View, StyleSheet, ScrollView, Linking} from "react-native";
//Linking.openURL("https://www.sdamned.com/comic/1111");

import { useEffect, useState } from "react";
import { storeData, getData } from "./DataManager";
export function FeedList(){

    const [a, seta] = useState();
    useEffect(()=> {
        getData('saved-feeds').then(data => {
            console.log(data);
            if(data !== undefined){
                seta(data)
            }
        
        })
        
    },[])

    return(
        
        <View style={styles.view}>
            
            <Button onPress={() => {storeData('saved-feeds', {
                title:'Slightly Damned',
                url:'https://www.sdamned.com/comic/rss'
            })}}>Store Data</Button>
        
            <Text>{a}</Text>
            <Titlebar></Titlebar>
            <ScrollView>
            <FeedCard></FeedCard>
            </ScrollView>
            <FAB icon="plus" style={styles.fab} onPress={()=>alert("lol")}>Add New Feed</FAB>
        </View>
    );
}

function FeedCard(){
    return(
        <View>
        <List.Item title="First Item" left={props => <List.Icon {...props} icon="folder" />}/>
        </View>
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
  