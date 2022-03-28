import React from 'react'; 
import {View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../MessageListItem/style';

const NewMessageButton = () => {
    return(
        <View style = {styles.container}>
            <MaterialCommunityIcons name = "message-reply-text" size= {30} color = "white"/>
        </View>
    ) 
}

export default NewMessageButton;