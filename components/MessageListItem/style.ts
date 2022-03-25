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

    midContainer:{
        justifyContent: "space-around"
    },


    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        marginHorizontal: 10,
        borderRadius:50, 
    },
    username:{
        fontWeight: "bold", 
        fontSize: 16, 

    },

    lastMessage:{
        fontSize: 15,
        color: "grey"

    }, 
    time:{
        marginRight: 10, 
        fontSize: 15, 
        color: "grey"
    }

})

export default styles; 