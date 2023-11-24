import {  Button,  Dialog, Portal, TextInput } from "react-native-paper";
import { fetchFeed } from '../modules/FeedFetcher'
import {useState} from 'react'
const exampleData = {
  "feedUrl": "https://www.sdamned.com/comic/rss",
  "paginationLinks": {
    "self": "https://www.sdamned.com/comic/rss"
  },
  "title": "Slightly Damned",
  "description": "Latest Slightly Damned comics and news",
  "link": "https://www.sdamned.com/",
  "language": "en-us"
}



export function FeedInputDialog({ visible, setVisible }) {

  const [text, setText] = useState('');

  const hideDialog = () => { setVisible(false) };

  const fetchURL = async () => {
    //should fetch from URL, for now just return placeholder text
    const foundFeed = await fetchFeed(text);
    if(foundFeed !== null){
      console.log(foundFeed.rss.channel);
      //add feed to list & save to cache
      hideDialog();
    }
    else
    {
      console.log('caught')
    }
    
  }


  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
          <TextInput label="RSS URL"  
          value={text}
          onChangeText={text => setText(text)}></TextInput>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={fetchURL}>Add</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
