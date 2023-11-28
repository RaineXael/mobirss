import {Button,Text, Appbar, List, Portal, Modal, Divider} from 'react-native-paper';
import {View, ScrollView, Linking } from 'react-native';
import {useState} from 'react';
import { WebView } from 'react-native-webview';
function ArticleItem({item, setter}){
  return(<>
  <List.Item key={item.title} title={item.title}
  onPress={() => {setter(item)}}></List.Item>
  <Divider/>
  </>);
}

function Titlebar({title, setter}){
  return(
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {setter(null)}} />
    <Appbar.Content title={title} />
  </Appbar.Header>
  );
}

export function ArticleList({feed, setter}){

  const [currentArticle, setCurrentArticle] = useState(null);
  const itemJSX = feed.item.map(elem => {
    //return <Text>{JSON.stringify(elem)}</Text>
    return <ArticleItem item={elem} setter={setCurrentArticle}></ArticleItem>
  })
  
  return(
    <View>
      <Titlebar title={feed.title} setter={setter}></Titlebar>
      <ScrollView>
        {currentArticle === null && (itemJSX)}
        {currentArticle !== null && (<ArticleWebView article={currentArticle}
        setter={setCurrentArticle}></ArticleWebView>)}
      </ScrollView>
      </View>
  );
  
}

function ArticleWebView({article, setter}){
  const htmlString = article.description

  const handleShouldStartLoad = (event) => {
    // Check if the link is external
    if (event.url.startsWith('http://') || event.url.startsWith('https://')) {
      // Open in the device's default browser
      Linking.openURL(event.url);
      return false; // Stop the WebView from navigating
    }

    return true; // Allow the WebView to navigate for other URLs
  };

  return(
  <Portal>
      <Titlebar title={article.title} setter={() => {setter(null)}}></Titlebar>  
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlString}}
         onShouldStartLoadWithRequest={handleShouldStartLoad}>
      </WebView>
    
    
    </Portal>
  );
}

