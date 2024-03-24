import { View, StyleSheet,Text,TouchableOpacity } from "react-native"



const Login2 = ()=>{

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={[styles.phone]}>
                    <Text style={[styles.option2]}>By Phone Number</Text>
                </View>
            </TouchableOpacity>
           <TouchableOpacity>
                <View style={[]}>
                    <Text style={[styles.option]}>By Email</Text>
                </View>
           </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:40,
        flexDirection:'row',
        width:"100%",
        alignItems:"center",
    },
    phone:{
        marginRight:80
    },
    option:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        color:"#1928B3",
        borderBottomWidth:3,
        borderBottomColor:"#121D82",
        paddingBottom:6
    },
    option2:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        color:"#4F4F4F"

    }
})


export default Login2;