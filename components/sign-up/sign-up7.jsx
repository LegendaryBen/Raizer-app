import { View, StyleSheet,TouchableOpacity,Text } from "react-native"



const Sign_up7 = ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.click}>
                <View style={styles.button}>
                    <Text style={styles.text}>Sign  Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginTop:120,
        height:54,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20
    },
    button:{
        width:"100%",
        height:"100%",
        backgroundColor:"#1928B3",
        justifyContent:"center",
        borderRadius:60,
    },
    click:{
        width:"100%",
        height:"100%",
    },
    text:{
        textAlign:"center",
        color:"#FFFFFF",
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:17,
        lineHeight:20
    }
})


export default Sign_up7;