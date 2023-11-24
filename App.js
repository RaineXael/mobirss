import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import { FeedList } from './views/FeedList';
import {useState} from 'react'
import {ArticleList} from './views/FeedView'
export default function App() {
  const [currentFeed, setCurrentFeed] = useState(null);
  return (
    <PaperProvider>
      <View style={styles.container}>
       {currentFeed === null && (<FeedList setter={setCurrentFeed}/>)}
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
