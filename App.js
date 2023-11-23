import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import { FeedList } from './modules/FeedList';

export default function App() {

  return (
    <PaperProvider>
      <View style={styles.container}>
      
       <FeedList></FeedList>
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
