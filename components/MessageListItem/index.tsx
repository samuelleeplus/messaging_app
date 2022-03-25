import React from 'react';
import { View, Text } from '../Themed';
import { ChatRoom } from '../../types';


export type ChatListItemProps = {
    chatRoom: ChatRoom ; 
}

const MessageListItem = (props : ChatListItemProps) => {
    const {chatRoom} = props ; 
    return (
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )


};

export default MessageListItem ; 