import { View,StyleSheet,Text,TouchableOpacity} from "react-native"
import { useState } from "react"

const User_home_notifaction3 = (props) => {

    const[all,setAll]=useState(1)


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setAll(1)}>
                <View style={[styles.box,{backgroundColor:all == 1?"#E9EBFC":"transparent"}]}>
                    <Text style={[styles.txt,{color:all == 1 ? "#1928B3":"#4F4F4F" }]}>All</Text>
                </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>setAll(2)}>
                <View style={[styles.box,{backgroundColor:all == 2?"#E9EBFC":"transparent"}]}>
                    <Text style={[styles.txt,{color:all == 2 ? "#1928B3":"#4F4F4F" }]}>Unread</Text>
                </View>
           </TouchableOpacity>
        </View>
    )
}

export default User_home_notifaction3


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    },
    box:{
        marginRight:20,
        paddingHorizontal:30,
        paddingVertical:5,
        backgroundColor:"#E9EBFC",
        borderRadius:20
    },
    txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        color:"#4F4F4F",
        fontWeight:"500"
    }
})