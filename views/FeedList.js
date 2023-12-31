import { Text, Card, Button, List, FAB, Appbar, Dialog, Badge, Menu } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import { FeedInputDialog } from "./FeedAddDialog";
import { useState } from "react";

//Linking.openURL("https://www.sdamned.com/comic/1111");
//saved-feeds
export function FeedList({ feedList, setter, saveFeedFN, optionSetter }) {
    const [visible, setVisible] = useState(false);

    const feedJSX = feedList.map(elem => {
        return (<FeedCard feed={elem} key={elem.link} setter={setter} style={styles.card}></FeedCard>)
    });
    console.log(feedJSX)


    return (
        <View style={styles.view}>

            <FeedInputDialog saveFeedFN={saveFeedFN} feedList={feedList} visible={visible} setVisible={setVisible} />
            <Titlebar optionSetter={optionSetter}></Titlebar>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {feedJSX}


            </ScrollView>

            <FAB icon="plus" size='large' style={styles.fab} onPress={() => setVisible(true)}>Add New Feed</FAB>
        </View>
    );
}


//<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

function FeedCard({ feed, setter }) {

    const [visible, setVisible] = useState(false);
    const closeMenu = () => {setVisible(false)}
    return (
        
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={

                <Card elevation={5} onPress={() => setter(feed)} style={styles.card} onLongPress={() => setVisible(true)}>
                    <Card.Title title={feed.title} subtitle={feed.link} 
                    right={() => <Badge>24</Badge>}/>
                    <Card.Content>
                        <Text>{feed.description}</Text>
                    </Card.Content>
                </Card>


            }>
            <Menu.Item onPress={() => { }} title="Edit" />
            <Menu.Item onPress={() => { }} title="Delete" />
        </Menu>

    );
}


function Titlebar({ optionSetter }) {
    return (
        <Appbar.Header>
            <Appbar.Content title="MobiRSS" />
            <Appbar.Action icon="cog" onPress={() => { optionSetter(true) }} />
        </Appbar.Header>
    );
}



const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    credit: {
        textAlign: 'center',
        margin: 16
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    card: {
        margin: 8
    },


})
