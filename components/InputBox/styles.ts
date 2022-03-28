import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row', 
        // margin: 10, 
    },
    plusContainer:{
        flexDirection: 'row',
        // margin:10, 
        marginBottom: 10, 
        marginLeft: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems : 'center'
    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5, 
        margin: 10, 
        borderRadius: 10,  
        flex : 1, 
        alignItems : "center"
    },

    textInput:{
        flex: 1, 
        
    },

    micContainer: {
        backgroundColor : Colors.light.tint, 
        justifyContent: 'center',
        borderRadius: 40, 
        width: 30, 
        height: 30, 
        alignItems: "center",
        marginRight: 15, 
        marginBottom: 10, 
        marginTop: 15, 

    },

    cameraContainer: {
        backgroundColor : Colors.light.tint, 
        borderRadius: 40, 
        width: 30, 
        height: 30, 
        alignItems: "center",
        marginRight: 10, 
        // marginRight: 10, 
        marginBottom: 10, 
        marginTop: 15, 
        justifyContent: "center" , 

    },
    

})

export default styles; 