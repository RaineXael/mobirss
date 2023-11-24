import {Text, Appbar} from 'react-native-paper';
import {View} from 'react-native';

function Article(){

}

function Titlebar({title, setter}){
  return(
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {setter(null)}} />
    <Appbar.Content title={title} />
  </Appbar.Header>
  );
}

export function ArticleList({feed, setter}){
  return(
    <View>
      <Titlebar title={feed.title} setter={setter}></Titlebar>
      <Text>Insert articles for {feed.title} here.</Text>
      </View>
  );
}