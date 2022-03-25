import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'; 
import {View, Text, TextInput} from "react-native"
import styles from '../InputBox/styles';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const InputBox = () => {
    return (
        <View style = {styles.container}>            
            <View style = {styles.plusContainer}>
                <AntDesign name="plus" size={25} color="black" />
            </View>
            <View style = {styles.mainContainer}>
                <TextInput style ={styles.textInput}/>
            </View>

            <View style = {styles.cameraContainer}>
                <Entypo name="camera" size={20} color="white" />
            </View>
            <View style = {styles.micContainer}>
                <MaterialCommunityIcons name = "microphone" size = {25} color= "white" />
            </View>      
        </View>


    )

}

export default InputBox ; 