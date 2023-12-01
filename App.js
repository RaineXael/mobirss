import { StatusBar } from 'expo-status-bar';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { StyleSheet, View , useColorScheme} from 'react-native';
import { PaperProvider, MD3DarkTheme,MD3LightTheme, Surface} from 'react-native-paper';
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

  const [isDark, setDark] = useState(false);

  const saveFeeds = async () => {
    await storeData('saved-feeds',feedList)
  }

  useEffect(() => {
    //load feedlist from disk on boot
    getData('saved-feeds').then(data => {
     
      if(data !== undefined){
        setFeedList(JSON.parse(data))
      }
      getData('darkmode').then(storedDark => {
        setDark(storedDark === "true");
        setLoaded(true);
      })
      
   }).catch(err => {
    console.error(err);
    setLoaded(true);
   }

   )},[])

  
   const colorScheme = useColorScheme();
   const { theme } = useMaterial3Theme();
 
   const paperTheme =
      isDark
       ? { ...MD3DarkTheme, colors: theme.dark }
       : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <Surface style={styles.container}>
        {
         feedsLoaded === true && 
        <>
         {currentFeed === null && isInSettings !== true &&(<FeedList feedList={feedList} setter={setCurrentFeed} saveFeedFN={saveFeeds} optionSetter={setInSettings}/>) }
         {currentFeed !== null && isInSettings !== true && (<ArticleList feed={currentFeed} setter={setCurrentFeed}/>)}  
         {isInSettings === true && <SettingsMenu menuStateSetter={setInSettings} isDark={isDark} setDark={setDark}></SettingsMenu>}
        </>
        }

        <StatusBar style="auto" />
      </Surface>
    </PaperProvider>
  
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
});
