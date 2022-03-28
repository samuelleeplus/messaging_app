import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MessageListItem from '../components/MessageListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';


export default function Contacts(){
return(
    <View style = {styles.container}>
      {/* <MessageListItem chatRoom = { ChatRooms[0]}/> */}
      <FlatList 
        style = {{width: '100%'}}
        data = {ChatRooms}
        renderItem = {({item}) => <MessageListItem chatRoom = {item}/>}
        keyExtractor = {(item) => item.id}
      />
      <NewMessageButton/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
