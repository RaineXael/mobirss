import {Appbar, Button} from 'react-native-paper';
import { storeData, getData } from "../modules/DataManager";


export function SettingsMenu({menuStateSetter}){

const resetData = () => {storeData('saved-feeds',[])}

return (
  <>
  <Titlebar title="Settings" setter={menuStateSetter}></Titlebar>
  <Button onPress={resetData}>RESET EVERYTHING</Button>
  </>
  
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