import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container : {
            flexDirection : 'row',
            width: '100%', 
            justifyContent: "space-between"
        },
        leftContainer: {
            flexDirection: 'row',
            // paddingLeft:10,
        },
    
        midContainer:{
            justifyContent: "space-around"
        },
    
        avatar: {
            width: 55,
            height: 55,
            marginRight: 10,
            marginHorizontal: 10,
            borderRadius:50, 
            marginBottom:10,
        },
        username:{
            fontWeight: "bold", 
            fontSize: 16, 
    
        },

})

export default styles ; 