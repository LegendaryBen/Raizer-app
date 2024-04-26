import { View,StyleSheet,Text,Image,TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';




const User_home_notification6 = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.notify_box,{padding:0}]}>
                <View style={styles.notify_box}>
                    <View style={styles.icon_box}>
                        <Feather name="send" size={24} color="#27AE60" />
                    </View>
                    <View style={styles.txt_box}>
                        <View style={styles.txt_container}>
                            <Text style={styles.txt} numberOfLines={1}>
                                Donation Successful
                            </Text>
                        </View>
                        <View style={styles.txt_container}>
                            <Text numberOfLines={2}>
                                Your donation to the the orpans in Libya is successful.
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default User_home_notification6


const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    notify_box:{
        flexDirection:"row",
        height:75,
        width:"100%",
        backgroundColor:"#E9EBFC",
        borderRadius:10,
        marginBottom:15,
        padding:10,
    },
    icon_box:{
        height:"100%",
        width:59,
        backgroundColor:"#27AE601A",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    txt_box:{
        height:"100%",
        flex:1
    },
    txt_container:{
        paddingHorizontal:10,
        width:"100%",
        marginBottom:3
    },
    txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"600"
    },
    txt_detail:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"400",
        fontFamily:"archivo"
    }
})