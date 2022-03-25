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
    // console.log(chatRoom.users[1])
    return (
        <View style = {styles.container}>
            <View style = {styles.leftContainer}>
                <Image source = {{uri:user.profileUri}} style = {styles.avatar} />
                <View style = {styles.midContainer}>
                    <Text style = {styles.username}>{user.firstName}</Text>
                    <Text style = {styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <View>
                {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
                <Text style = {styles.time}>Yesterday</Text>
            </View>
        </View>
    )


};

export default MessageListItem ; 