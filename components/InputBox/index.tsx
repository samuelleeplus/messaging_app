import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'; 
import {View, Text, TextInput} from "react-native"
import styles from '../InputBox/styles';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const InputBox = () => {
// using a state to send to backend 
    const [message, setMessage] = useState('');
    const onMicCameraPress = () => {
        console.warn("Microphone")
    }
    const onSendPress = () => {
        console.warn("Sending: ${message}")
        
        setMessage('');
    }
    const onPress = () => {
        if(!message){
            onMicCameraPress(); 
        }else{
            onSendPress();
        }
    }

    return (
        <View style = {styles.container}>            
            <View style = {styles.plusContainer}>
                <AntDesign name="plus" size={25} color="black" />
            </View>
            <View style = {styles.mainContainer}>
                <TextInput 
                    placeholder='Type a message...'
                    style ={styles.textInput}
                    multiline
                    value = {message}
                    onChangeText= {setMessage}/>         
            </View>
            {/* <TouchableOpacity onPress={onPress}></TouchableOpacity> */}
            <View style = {styles.micContainer}>
                {!message 
                    ? <MaterialCommunityIcons name = "microphone" size = {25} color= "white" />
                    : <MaterialIcons name = "send" size= {20} color= "white"/>
                }
            </View>   
            {!message && <View style = {styles.cameraContainer}>
                <Entypo name="camera" size={20} color="white"/>
            </View>}

                

   
        </View>


    )

}

export default InputBox ; 