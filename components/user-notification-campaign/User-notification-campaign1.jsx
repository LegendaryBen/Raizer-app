import { View,StyleSheet,TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const User_notification_campaign1 = (props) => {

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="#4F4F4F" />
            </TouchableOpacity>
        </View>
    )
}


export default User_notification_campaign1



const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginTop:30,
        paddingHorizontal:20
    },
    btn:{
        width:25,
        height:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
})