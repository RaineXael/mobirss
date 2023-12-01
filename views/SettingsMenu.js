import {Appbar, Button, Checkbox, Portal, Dialog, Text} from 'react-native-paper';
import { storeData} from "../modules/DataManager";
import { ScrollView, StyleSheet } from 'react-native';
import {useState} from 'react';

export function SettingsMenu({menuStateSetter, isDark, setDark}){



return (
  <>
  <Titlebar title="Settings" setter={menuStateSetter}></Titlebar>
  <ScrollView>
 
  <DarkModeSetter isDark={isDark} setDark={setDark}/>
  <ResetDataButton></ResetDataButton>
 
  </ScrollView>
  <Text style={styles.credit}>App by RaineXael</Text>
  </>
  
);
}

function ResetDataButton(){

  const resetData = () => {storeData('saved-feeds',[])}
  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  const confirmDeletion = () => {
    resetData();
    alert('Feeds Deleted.');
    setVisible(false);
    
  }
  return(
    <>
    <Button onPress={() => setVisible(true)}>RESET EVERYTHING</Button>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
      
          
          <Dialog.Content>
          <Text>Are you sure you want to erase all the feeds you've saved?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>No</Button>
          <Button onPress={confirmDeletion}>Yes</Button>
        </Dialog.Actions>
      
      </Dialog>
    </Portal>
    </>
  );
}

function DarkModeSetter({isDark, setDark}){

  const toggleDark = ()=>{
    setDark(!isDark);
    storeData('darkmode', !isDark);
  }

  return(
    <Checkbox.Item label="Dark Mode" status={isDark ? 'checked' : 'unchecked'} onPress={toggleDark}/>
  );
}

function Titlebar({title, setter}){
  return(
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {setter(false)}} />
    <Appbar.Content title={title} />
  </Appbar.Header>
  );
}


const styles = StyleSheet.create({

  credit:{
      textAlign:'center',
      margin:16
  },

 
})