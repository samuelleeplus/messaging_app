import moment from 'moment';
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native"
import { ChatRoom } from '../../types';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom ; 
}

const MessageListItem = (props : ChatListItemProps) => {
    const {chatRoom} = props ; 
    // for initial UI testing purpose, assume that 0th index user in users array (object) is me, and the other person is 1st index in array  
    
    const navigation = useNavigation(); 
    
    const user = chatRoom.users[1];
    // console.log(chatRoom.users[1])
    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id : chatRoom.id,
            firstName :  user.firstName , 
        })
        // console.warn('Clicked on', user.firstName)
    }
    return (

        <TouchableWithoutFeedback onPress={onClick}>
            <View style = {styles.container}>
                <View style = {styles.leftContainer}>
                    <Image source = {{uri:user.profileUri}} style = {styles.avatar} />
                    <View style = {styles.midContainer}>
                        <Text style = {styles.username}>{user.firstName}</Text>
                        <Text style = {styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.time}>
                        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YY")}
                    
                    </Text>
                    {/* <Text style = {styles.time}>Yesterday</Text> */}
                </View>
            </View>
        </TouchableWithoutFeedback>


    )


};

export default MessageListItem ; 