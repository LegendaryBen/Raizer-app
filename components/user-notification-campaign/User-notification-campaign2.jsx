import { View,StyleSheet,Text,TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';



const User_notification_campaign2 = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                Start campaign
            </Text>
            <TouchableOpacity style={styles.btn}>
                <Feather name="x" size={24} color="#1928B3" />
            </TouchableOpacity>
        </View>
    )
}

export default User_notification_campaign2


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:20
    },
    btn:{
        paddingHorizontal:5,
        paddingVertical:7,
        borderRadius:8,
        backgroundColor:"#E9EBFC"
    },
    txt:{
        fontFamily:"archivo",
        fontSize:24,
        lineHeight:28,
        fontWeight:"600",
        color:"#181818"
    }
})