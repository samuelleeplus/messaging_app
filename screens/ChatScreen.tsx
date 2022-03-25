import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MessageListItem from '../components/MessageListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../data/ChatRooms';

// export default function TabOneScreen({ navigation }: RootTabScreenProps<'Messages'>) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/ChatScreen.tsx" />
//     </View>
//   );
// }

export default function ChatScreen(){
return(
    <View style = {styles.container}>
      <MessageListItem chatRoom = { ChatRooms[0]}/>
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
