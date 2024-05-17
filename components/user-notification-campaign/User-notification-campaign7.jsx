import { View,TouchableOpacity,Text,StyleSheet } from "react-native"


const User_notification_campaign7 = ({setModalVisible}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={()=>setModalVisible(true)}>
                <Text style={styles.txt}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default User_notification_campaign7


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:54,
        marginTop:40,
        paddingHorizontal:20
    },
    btn:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        backgroundColor:"#1928B3",
        borderRadius:30
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        color:"#FFFFFF"
    }
})