import { View,StyleSheet,TextInput,Image,TouchableOpacity } from "react-native"



const Sign_up5 = ()=>{
    return (
        <View style={[styles.container]}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Login password"/>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/hidden.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:50,
      marginTop:50,
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


export default Sign_up5;