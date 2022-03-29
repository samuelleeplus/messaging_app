import moment from 'moment';
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import { ChatRoom } from '../../types';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
    chatRoom: ChatRoom ; 
}

const ContactListItem = (props: ContactListItemProps) => {
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
    }
    return (

        <TouchableWithoutFeedback onPress={onClick}>
            <View style = {styles.container}>
                <View style = {styles.leftContainer}>
                    <Image source = {{uri:user.profileUri}} style = {styles.avatar} />
                    <View style = {styles.midContainer}>
                        <Text style = {styles.username}>{user.firstName}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>


    )

}; 

export default ContactListItem;