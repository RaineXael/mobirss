import { Text, Card, Button, FAB, Appbar} from "react-native-paper";
import { View, StyleSheet, ScrollView} from "react-native";

export function FeedList(){

    return(
        
        <View style={styles.view}>
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
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            <Card style={styles.card}><Card.Title title="RSS NAME"/></Card>
            
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
  