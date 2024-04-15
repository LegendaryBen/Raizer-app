import { View,Image,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"


const Sign_up1 = ()=>{

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Image source={require('../../assets/images/back.png')} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:40
    },
    image:{
        height:24,
        width:24,
        objectFit:"contain"
    }
})


export default Sign_up1;