import moment from "moment";
import React from "react" ; 
import {Text, View} from 'react-native';
import { Message } from "../../types";
import styles from "./styles";


export type ChatMessageProps = {
    message: Message ; 
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props; 
    // check who the user is
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style = {styles.container}>
            <View style = {[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#b39eb5' : 'white', 
                marginLeft : isMyMessage() ? 70: 0 , 
                marginRight: isMyMessage() ? 0:70, 
                
            }
            ]
            }>
                {/* dont show my name for the message i send */}
                {!isMyMessage() && <Text style= {styles.name}>{message.user.firstName}</Text>}
                <Text style = {styles.message}>{message.content}</Text>
                <Text style = {styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>

        </View>

    )
}

export default ChatMessage ; 