import { View,Text,StyleSheet } from "react-native"




const User_home_notification4 = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>New</Text>
        </View>
    )
}

export default User_home_notification4

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        color:"#181818",
        fontWeight:"600"
    }
})