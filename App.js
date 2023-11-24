import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import { FeedList } from './views/FeedList';
import {useState, useEffect} from 'react'
import {ArticleList} from './views/FeedView'
export default function App() {
  const [currentFeed, setCurrentFeed] = useState(null);
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    //load feedlist from disk on boot
    /*
    getData('saved-feeds').then(data => {
      console.log(setFeeds);
      if(data !== undefined){
          setFeeds(JSON.parse(data))
      }
  
   })*/
  },[])

  useEffect(()=>{
    //save feedlist on change
    console.log('Feed List modified')
  },[feedList])
  

  return (
    <PaperProvider>
      <View style={styles.container}>
       {currentFeed === null && (<FeedList feedList={feedList} setter={setCurrentFeed}/>)}
       {currentFeed !== null && <ArticleList feed={currentFeed} setter={setCurrentFeed}/>}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
});
