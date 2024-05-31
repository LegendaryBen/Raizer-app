import { View,StyleSheet,TextInput,Image,TouchableOpacity } from "react-native"


const Login3 = ({val,func})=>{

    return (
        <View style={[styles.container]}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Email" value={val} onChangeText={func}/>
                <TouchableOpacity onPress={()=>func('')}>
                    <Image source={require('../../assets/images/cancel1.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:50,
      marginTop:30,
      paddingHorizontal:20,
      flexDirection:"row"
    },
    inputBox:{
        flex:1,
        backgroundColor:"#F2F2F380",
        height:"100%",
        borderWidth:2,
        borderColor:"#8E8E9366",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5
    },
    input:{
        flex:1,
        height:"100%",
        fontFamily:"archivo",
        fontWeight:"500",
        fontSize:14,
        lineHeight:16
    },
    img:{
        height:25,
        width:25,
        marginLeft:10
    }
})


export default Login3;