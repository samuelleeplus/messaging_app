import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // containers for the chatroom
    container : {
        flexDirection : 'row',
        width: '100%', 
        justifyContent: "space-between"
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginHorizontal: 10,
    }
})

export default styles; 