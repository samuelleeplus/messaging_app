import React from 'react';
import {View, Text, Image} from "react-native"
import { ChatRoom } from '../../types';
import styles from './style';


export type ChatListItemProps = {
    chatRoom: ChatRoom ; 
}

const MessageListItem = (props : ChatListItemProps) => {
    const {chatRoom} = props ; 
    // for initial UI testing purpose, assume that 0th index user in users array (object) is me, and the other person is 1st index in array  
    const user = chatRoom.users[1];

    console.log(chatRoom.users[1])
    return (
        <View>
            <Image source = {{uri:user.profileUri}} style = {styles.avatar} />
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )


};

export default MessageListItem ; 