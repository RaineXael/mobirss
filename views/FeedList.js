import { Text, Card, Button,List, FAB, Appbar, Dialog, Portal, TextInput} from "react-native-paper";
import { View, StyleSheet, ScrollView, Linking} from "react-native";
import { FeedInputDialog } from "./FeedAddDialog";
import { useState } from "react";
import { storeData, getData } from "../modules/DataManager";
//Linking.openURL("https://www.sdamned.com/comic/1111");
//saved-feeds
export function FeedList({feedList, setter, saveFeedFN}){
    const [visible, setVisible] = useState(false);

    const feedJSX = feedList.map(elem => {
        return(<FeedCard feed={elem} key={elem.link} setter={setter} style={styles.card}></FeedCard>)
    });
    console.log(feedJSX)

    //temp
    const resetData = () => {
        storeData('saved-feeds',[]);
    };


    return(
        <View style={styles.view}> 
           
            <FeedInputDialog saveFeedFN={saveFeedFN} feedList={feedList} visible={visible} setVisible={setVisible}/>
            <Titlebar></Titlebar>
            <ScrollView>
            {feedJSX}
            <Button onPress={resetData}>RESET EVERYTHING</Button>
            <Text style={styles.credit}>App by RaineXael</Text>
            </ScrollView>
            
            <FAB icon="plus" size='large' style={styles.fab} onPress={()=>setVisible(true)}>Add New Feed</FAB>
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
      <Appbar.Action icon="cog" onPress={() => {}} />
    </Appbar.Header>
    );
  }



const styles = StyleSheet.create({
    view:{
        flex:1,
    },
    credit:{
        textAlign:'center',
        margin:16
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    card:{
        margin:32
    },
   
  })
  