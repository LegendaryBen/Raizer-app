import { View,Text,ImageBackground,StyleSheet,TouchableOpacity,Image } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useState } from "react";


const User_home_search4 = (props) => {

    const[track,setTarck] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{width:"50%",height:"100%"}}>
                <ImageBackground style={styles.img} source={require("../../assets/images/tiktok.jpg")}>
                    <TouchableOpacity style={[styles.icon_box,{position:"absolute",right:10,top:10}]} onPress={()=>setTarck(!track)}>
                        <View style={[styles.icon_box,{backgroundColor:track?"#121D82":"#E9EBFC"}]}>
                            <Feather name="bookmark" size={20} color={track?"#F2F3FD":"#121D82"} />
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
           <View style={{padding:10,flex:1}}>
                <View style={styles.avatar_box}>
                    <View style={styles.avatar_cont}>
                        <Image style={[styles.avatar,{zIndex:2}]} source={require('../../assets/images/twitter.jpg')} />
                        <Image style={[styles.avatar,{zIndex:3,right:-10}]} source={require('../../assets/images/tiktok.jpg')} />
                        <Image style={[styles.avatar,{zIndex:4,right:-20}]} source={require('../../assets/images/spotify.jpg')} />
                    </View>
                    <View style={styles.txt_cont}>
                        <Text style={styles.txt} numberOfLines={1}>903+ people donated</Text>
                    </View>
                </View>
                <View style={styles.donate}>
                    <Text style={styles.donate_txt} numberOfLines={2}>
                        Donate to orphans in Libya
                    </Text>
                </View>
                <View style={styles.load_cont}>
                    <View style={styles.load}></View>
                </View>
                <View style={styles.loader_txt_cont}>
                    <View style={[styles.loader_box,{width:"50%"}]}>
                        <Text style={[styles.loader_txt]} numberOfLines={1}>Raised</Text>
                    </View>
                    <View style={styles.loader_box}>
                        <Text style={styles.loader_txt}>11%</Text>
                    </View>
                </View>
           </View>
        </View>
    )
}

export default User_home_search4


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:118,
        overflow:"hidden",
        backgroundColor:"#FFFFFF",
        marginBottom:10,
        borderRadius:16,
        flexDirection:"row"
    },
    img:{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    },
    icon_box:{
        height:29,
        width:26,
        backgroundColor:"#E9EBFC",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    },
    avatar_box:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5
    },
    avatar_cont:{
        flexDirection:"row",
        marginRight:10,
        width:18,
        height:18
    },
    txt_cont:{
        marginLeft:10,
        padding:5,
        flex:1
    },
    txt:{
        fontSize:11,
        lineHeight:13,
        fontWeight:"400",
        fontFamily:"archivo",
        color:"#4F4F4F"
    },
    avatar:{
        width:18,
        height:18,
        borderRadius:50,
        position:"absolute"
    },
    donate:{
        paddingRight:5,
        marginBottom:10
    },
    donate_txt:{
        fontFamily:"archivo",
        lineHeight:16,
        fontSize:14,
        fontWeight:"500",
        color:"#181818"
    },
    load_cont:{
        width:"100%",
        overflow:"hidden",
        height:8,
        backgroundColor:"#D2D6F4",
        borderRadius:10,
        marginBottom:10
    },
    load:{
        width:"50%",
        height:"100%",
        borderRadius:10,
        backgroundColor:"#1928B3"
    },
    loader_txt:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:14,
        color:"#4F4F4F"
    },
    loader_txt_cont:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    loader_box:{
        paddingRight:4
    }
})