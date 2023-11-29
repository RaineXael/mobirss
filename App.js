import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import { FeedList } from './views/FeedList';
import {useState, useEffect} from 'react'
import {ArticleList} from './views/FeedView'
import { getData, storeData } from './modules/DataManager';
import { SettingsMenu } from './views/SettingsMenu';



export default function App() {
  const [currentFeed, setCurrentFeed] = useState(null);
  const [feedList, setFeedList] = useState([]);
  const [feedsLoaded, setLoaded] = useState(false);
  const [isInSettings, setInSettings] = useState(false);
  const saveFeeds = async () => {
    await storeData('saved-feeds',feedList)
  }

  useEffect(() => {
    //load feedlist from disk on boot
    getData('saved-feeds').then(data => {
      console.log(feedList);
      if(data !== undefined){
        setFeedList(JSON.parse(data))
      }
      setLoaded(true);
   }).catch(err => {
    console.error(err);
    setLoaded(true);
   }

   )},[])

  useEffect

  return (
    <PaperProvider>
      <View style={styles.container}>
        {
         feedsLoaded === true && 
        <>
         {currentFeed === null && isInSettings !== true &&(<FeedList feedList={feedList} setter={setCurrentFeed} saveFeedFN={saveFeeds} optionSetter={setInSettings}/>) }
         {currentFeed !== null && isInSettings !== true && (<ArticleList feed={currentFeed} setter={setCurrentFeed}/>)}  
         {isInSettings === true && <SettingsMenu menuStateSetter={setInSettings}></SettingsMenu>}
        </>
        }

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
