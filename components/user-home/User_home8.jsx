import { View,StyleSheet,Text,TouchableOpacity,ImageBackground,Image,Platform } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useState } from "react";




const User_home8 = () => {

    const[track , setTrack]= useState(false)


  return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.disp_cont}>
                    <ImageBackground style={styles.disp} source={require('../../assets/images/tiktok.jpg')}>
                        <TouchableOpacity onPress={()=>setTrack(!track)}>
                            <View style={[styles.icon_cont,{backgroundColor:track?"#1928B3":"#E9EBFC"}]}>
                                <Feather name="bookmark" size={20} color={`${track?"white":"#1928B3"}`} />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.avatar_box}>
                        <View style={styles.avatar_container}>
                            <Image source={require('../../assets/images/tiktok.jpg')} style={[styles.avatar,{zIndex:1}]}/>
                            <Image source={require('../../assets/images/spotify.jpg')} style={[styles.avatar,{left:12,zIndex:2}]}/>
                            <Image source={require('../../assets/images/twitter.jpg')} style={[styles.avatar,{left:24,zIndex:3}]}/>
                        </View>
                        <View style={styles.txt_box}>
                            <Text numberOfLines={1} style={styles.txt}>767+ people donated</Text>
                        </View>
                </View>
                <View style={styles.donated}>
                    <Text style={styles.donated_txt} numberOfLines={1}>Donate to help build schools in mali</Text>
                </View>
                <View style={styles.loader_container}>
                    <View style={styles.loader_box}>
                        <View style={[styles.loader,{width:"50%"}]}></View>
                    </View>
                </View>
                <View style={styles.loader_signal}>
                    <View style={{flexBasis:"70%",paddingRight:5}}>
                        <Text numberOfLines={1} style={styles.signal_txt}>Raised</Text>
                    </View>
                    <View>
                        <Text style={styles.signal_txt}>21%</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}

export default User_home8


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:260,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
        paddingHorizontal:20,
        overflow:"hidden"
    },
    card:{
        width:"100%",
        height:"100%",
        overflow:"hidden",
        borderRadius:15,
        borderWidth:0.3,
        borderColor:"#8E8E9366",
        backgroundColor:"#FFFFFF"
    },
    disp:{
        height:120,
        width:"100%",
    },
    disp_cont:{
        height:120,
        width:"100%",
        borderRadius:15,
        overflow:"hidden"
    },
    icon_cont:{
        position:"absolute",
        right:10,
        top:10,
        width:26,
        height:29,
        backgroundColor:"#E9EBFC",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            android: {
              elevation: 5,
            },
          }),
        borderRadius:10
    },
    avatar_box:{
        width:"100%",
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        marginBottom:20
    },
    avatar_container:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:20,
        width:20
    },
    avatar:{
        width:20,
        height:20,
        borderRadius:50,
        position:"absolute"
    },
    txt_box:{
        marginLeft:20,
        paddingRight:20
    },
    txt:{
        fontFamily:"archivo",
        fontSize:13,
        lineHeight:13,
        fontWeight:"400",
        color:"#4F4F4F"
    },
    donated:{
        paddingHorizontal:20,
        width:"100%"
    },
    donated_txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#181818"
    },
    loader_box:{
        height:8,
        width:"100%",
        backgroundColor:"#D2D6F4",
        overflow:"hidden",
        borderRadius:5
    },
    loader:{
        borderRadius:5,
        backgroundColor:"#1928B3",
        height:"100%"
    },
    loader_container:{
        width:"100%",
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:8,
        overflow:"hidden",
        borderRadius:5,
        marginTop:20
    },
    loader_signal:{
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:8
    },
    signal_txt:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"400"
    }
})