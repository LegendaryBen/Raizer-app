import { View,StyleSheet } from "react-native"


const User_notification_campaign3 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.loader}>

            </View>
        </View>
    )
}

export default User_notification_campaign3


const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        overflow:"hidden",
        borderRadius:5,
        backgroundColor:"#D2D6F4",
        height:5,
        marginTop:10
    },
    loader:{
        width:"50%",
        height:"100%",
        borderRadius:5,
        backgroundColor:"#1928B3"
    }
})