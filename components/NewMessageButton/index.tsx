import React from 'react'; 
import {View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../MessageListItem/style';
import { Entypo } from '@expo/vector-icons';

const NewMessageButton = () => {
    return(
        <View style = {styles.container}>
            <Entypo name="new-message" size={40} color="white" />
        </View>
    ) 
}

export default NewMessageButton;