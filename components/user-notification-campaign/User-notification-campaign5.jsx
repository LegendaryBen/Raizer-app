import { View,StyleSheet,Text,TouchableOpacity } from "react-native"


const User_notification_campaign5 = (props) => {

    const val = ['$1000','$2000','$3000','$4000','$5000']



    return (
        <View style={styles.container}>
            {
                val.map((item,i)=>{
                    return (
                        <TouchableOpacity key={i} style={styles.cur}>
                            <View style={[styles.cur,{paddingVertical:0}]}>
                                <Text style={styles.txt}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                      
                    )
                })
            }
        </View>
    )
}


export default User_notification_campaign5


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:30
    },
    cur:{
        flexBasis:"18%",
        paddingVertical:10,
        backgroundColor:"#E9EBFC",
        borderRadius:20
    },
    txt:{
        textAlign:"center",
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#1928B3"
    }
})