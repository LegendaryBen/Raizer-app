import { View,TouchableOpacity,Text,StyleSheet } from "react-native"


const Sign_up8 = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Already have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.span}> Log In </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginTop:10,
        marginBottom:50
    },
    text:{
        textAlign:"center",
        fontFamily:"archivo"
    },
    span:{
        textAlign:"center",
        fontFamily:"archivo",
        fontWeight:"400",
        fontSize:14,
        lineHeight:16,
        color:"#1928B3"
    },
    box:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})


export default Sign_up8;