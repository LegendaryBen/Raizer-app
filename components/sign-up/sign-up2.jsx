import {Text,ScrollView,StyleSheet,View} from "react-native";

const Sign_up2 = ()=>{

    return (
        <View style={styles.textBox}>
            <Text style={styles.text}>Sign  Up</Text>
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
        marginTop:30,
        paddingHorizontal:20
    }
})


export default Sign_up2