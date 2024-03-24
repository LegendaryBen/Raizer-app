import {View,Text,StyleSheet,TouchableOpacity} from "react-native"



const Login5 = ()=>{
    return(

        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>Forgot password?</Text>
            </View>
        </TouchableOpacity>
        
    )
}



const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:20
    },
    text:{
        color:"#4F4F4F",
        fontFamily:"archivo",
        fontWeight:"400",
        fontSize:14,
        lineHeight:16
    }
})


export default Login5;