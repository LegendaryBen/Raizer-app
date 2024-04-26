import { View,StyleSheet,Text,TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";


const User_home_notification2 = (props) => {

    const[drop,setdrop] = useState(false)


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.notify_txt}>Notification</Text>
            </View>
            <TouchableOpacity onPress={()=>setdrop(!drop)}>
                <View style={styles.icon_box}>
                    <AntDesign name="menufold" size={24} color="#1928B3" />
                </View>
            </TouchableOpacity>
            <View style={[styles.options,{display:drop?"flex":"none"}]}>
                <TouchableOpacity style={styles.btn_box}  onPress={()=>setdrop(!drop)}>
                    <View>
                        <Text style={styles.btn_txt}>Donations</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_box} onPress={()=>setdrop(!drop)}>
                    <View>
                        <Text style={styles.btn_txt}>Wallet</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_box} onPress={()=>setdrop(!drop)}>
                    <View>
                        <Text style={styles.btn_txt}>Fundraise</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default User_home_notification2


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    icon_box:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:34,
        height:37,
        backgroundColor:"#E9EBFC",
        borderRadius:5
    },
    notify_txt:{
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:24,
        lineHeight:28,
        color:"#181818"
    },
    options:{
        position:"absolute",
        zIndex:5,
        right:20,
        bottom:-110,
        backgroundColor:"#E9EBFC",
        paddingVertical:10,
        borderRadius:5,
        height:100
    },
    btn_box:{
        marginBottom:10,
        paddingRight:60,
        paddingLeft:10,
    },
    btn_txt:{
        fontFamily:"archivo",
        fontWeight:"bold"
    }
})