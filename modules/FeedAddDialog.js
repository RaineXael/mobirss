import { Text, Card, Button,List, FAB, Appbar, Dialog, Portal, TextInput} from "react-native-paper";
import { View, StyleSheet, ScrollView, Linking} from "react-native";

export function FeedInputDialog({visible, setVisible}){
    

    const hideDialog = () => {setVisible(false)};
    
    const fetchURL = () => {
        //should fetch from URL, for now just return placeholder text
    }


    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content> 
            <TextInput label="RSS URL"></TextInput>
          </Dialog.Content>
          <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={hideDialog}>Add</Button>
        </Dialog.Actions>        
        </Dialog>
      </Portal>
    );
}
