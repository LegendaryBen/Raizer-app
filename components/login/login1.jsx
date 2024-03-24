import {Text,ScrollView,StyleSheet,View} from "react-native";

const Login1 = ()=>{

    return (
        <View style={styles.textBox}>
            <Text style={styles.text}>Log In</Text>
        </View>
    )


}




const styles = StyleSheet.create({
    text:{
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:24,
        lineHeight:28,
        color:"black"
    },
    textBox:{
        marginTop:70,
        paddingHorizontal:20
    }
})


export default Login1