import { View,Text,StyleSheet,TouchableOpacity, } from "react-native"
import { Ionicons } from '@expo/vector-icons';




const User_notification1 = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Campaign</Text>
            <TouchableOpacity>
                <View style={styles.icon_box}>
                    <Ionicons name="notifications-outline" size={25} color="#121D82" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default User_notification1


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:30,
        marginBottom:40
    },
    txt:{
        fontFamily:"archivo",
        fontSize:24,
        lineHeight:28,
        fontWeight:"600",
        color:"#181818"
    },
    icon_box:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#E9EBFC",
        padding:6,
        borderRadius:8
    }
})