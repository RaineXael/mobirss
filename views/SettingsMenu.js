import {Appbar} from 'react-native-paper';

export function SettingsMenu({menuStateSetter}){
return (
  <Titlebar title="Settings" setter={menuStateSetter}></Titlebar>
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