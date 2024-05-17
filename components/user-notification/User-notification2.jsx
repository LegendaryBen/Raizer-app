import { View,Text,StyleSheet,TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const User_notification2 = ({logo,text}) => {

    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon_box} onPress={()=>navigation.navigate("Start_campaign")}>
                <View style={styles.box}>
                    <View style={styles.icon}>
                        <AntDesign name={logo} size={24} color="#1928B3" />
                    </View>
                    <Text style={styles.txt} numberOfLines={1}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default User_notification2


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:58,
        paddingHorizontal:20,
        marginBottom:10
    },
    box:{
        width:"100%",
        height:"100%",
        backgroundColor:"#E9EBFC",
        borderColor:"#8E8E9366",
        borderWidth:1,
        borderRadius:8,
        padding:8,
        flexDirection:"row",
        alignItems:"center"
    },
    icon_box:{
        width:"100%",
        height:"100%"
    },
    icon:{
        marginRight:12
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"500"
    }
})