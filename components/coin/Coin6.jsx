import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';



const Coin6 = () => {

    const[check,setCheck] = useState(false)

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.cont}>
                <View>
                    <Text style={styles.amount} numberOfLines={1}>
                        0.002758
                    </Text>
                    <Text style={styles.val} numberOfLines={1}>
                        $165.50
                    </Text>
                </View>
            </View>
            <View style={[styles.cont,{justifyContent:"flex-end"}]}>
                <View style={[styles.btn,{height:check !== true?40:180,overflow:"hidden"}]}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.coins} onPress={()=>setCheck(false)}>
                            <Image style={styles.img} source={require("../../assets/images/btc-logo.png")}/>
                            <Text numberOfLines={1}>
                                BTC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.coins} onPress={()=>setCheck(false)}>
                            <Image style={styles.img} source={require("../../assets/images/btc-logo.png")}/>
                            <Text numberOfLines={1} style={styles.btc}>
                                BTC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.coins} onPress={()=>setCheck(false)}>
                            <Image style={styles.img} source={require("../../assets/images/btc-logo.png")}/>
                            <Text numberOfLines={1} style={styles.btc}>
                                BTC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.coins} onPress={()=>setCheck(false)}>
                            <Image style={styles.img} source={require("../../assets/images/btc-logo.png")}/>
                            <Text numberOfLines={1} style={styles.btc}>
                                BTC
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.select} onPress={()=>setCheck(!check)}>
                        <AntDesign name="caretdown" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Coin6

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:20
    },
    box:{
        width:"100%",
        backgroundColor:"#E9EBFC",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#8E8E9366",
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15,
        paddingBottom:15
    },
    amount:{
        marginBottom:5,
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        fontFamily:"archivo"
    },
    val:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#4F4F4F",
        fontFamily:"archivo"
    },
    cont:{
        flexBasis:"50%",
        flexDirection:"row"
    },
    btn:{
        width:120,
        flexDirection:"row",
        alignItems:"flex-start",
        backgroundColor:"#F2F3FD",
        borderRadius:8,
        padding:10,
        zIndex:5
    },
    coins:{
        flexDirection:"row",
        marginBottom:15,
        width:"100%",
        marginRight:10
    },
    select:{
        marginLeft:10,
    },
    img:{
        height:24,
        width:24,
        borderRadius:50,
        marginRight:10
    },
    btc:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"400",
        fontFamily:"archivo",
        color:"#181818"
    }
})