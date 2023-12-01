import { Text, Card, Button,List, FAB, Appbar, Dialog, Portal, TextInput} from "react-native-paper";
import { View, StyleSheet, ScrollView} from "react-native";
import { FeedInputDialog } from "./FeedAddDialog";
import { useState } from "react";

//Linking.openURL("https://www.sdamned.com/comic/1111");
//saved-feeds
export function FeedList({feedList, setter, saveFeedFN, optionSetter}){
    const [visible, setVisible] = useState(false);

    const feedJSX = feedList.map(elem => {
        return(<FeedCard feed={elem} key={elem.link} setter={setter} style={styles.card}></FeedCard>)
    });
    console.log(feedJSX)


    return(
        <View style={styles.view}> 
           
            <FeedInputDialog saveFeedFN={saveFeedFN} feedList={feedList} visible={visible} setVisible={setVisible}/>
            <Titlebar optionSetter={optionSetter}></Titlebar>
            <ScrollView>
            {feedJSX}
            
         
            </ScrollView>
            
            <FAB icon="plus" size='large' style={styles.fab} onPress={()=>setVisible(true)}>Add New Feed</FAB>
        </View>
    );
}


//<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

function FeedCard({feed, setter}){
   
    return(
        <Card elevation={4} onPress={() => setter(feed)}>
        <Card.Title title={feed.title} subtitle={feed.link}/>
        <Card.Content>
            <Text>{feed.description}</Text>
        </Card.Content>
        </Card>
    );
}


function Titlebar({optionSetter}){
    return(
      <Appbar.Header>
      <Appbar.Content title="MobiRSS" />
      <Appbar.Action icon="cog" onPress={() => {optionSetter(true)}} />
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
  