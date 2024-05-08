import { View,TouchableOpacity,Text,StyleSheet } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';


const User_home_bookmark2 = ({name}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>{name}</Text>
            </View>
            <TouchableOpacity style={styles.icon_box}>
                <View style={styles.icon_box}>
                    <SimpleLineIcons name="options-vertical" size={21} color="#1928B3" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default User_home_bookmark2

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems:"center",
        marginTop:20,
        marginBottom:10
    },
    txt:{
        fontFamily:"archivo",
        fontSize:24,
        lineHeight:28,
        fontWeight:"600"
    },
    icon_box:{
        width:34,
        height:37,
        backgroundColor:"#E9EBFC",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    }
})
