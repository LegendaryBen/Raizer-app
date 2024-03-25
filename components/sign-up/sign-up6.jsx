import {View,Text,StyleSheet,TouchableOpacity} from "react-native"



const Sign_up6 = ()=>{
    return(

            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
        
    )
}



const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20,
        width:"auto"
    },
    text:{
        color:"#4F4F4F",
        fontFamily:"archivo",
        fontWeight:"400",
        fontSize:14,
        lineHeight:16
    }
})


export default Sign_up6;