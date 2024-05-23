import { StyleSheet, Text, View,Platform,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';




const User_wallet1 = () => {
  return (
    <>  
        <View style={styles.price_cont}>
            <View style={styles.notify}>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={26} color="#F2F3FD" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.trust}>
                    <Ionicons name="shield-outline" size={22} color="#F2F3FD" />
                    <Text style={styles.txt}>Trust wallet</Text>
                    <FontAwesome6 name="caret-down" size={20} color="#F2F3FD" />
                </TouchableOpacity>
            </View>
            <View style={styles.name_box}>
                <Text style={styles.name} numberOfLines={1}>
                    @Favsolomon
                </Text>
            </View>
            <View style={styles.amount_box}>
                <Text style={styles.amount} numberOfLines={1}>
                    $2,044.19
                </Text>
            </View>
            <View style={styles.donate_cont}>
                <View style={styles.donate_box}>
                    <TouchableOpacity style={[styles.donate,{borderRightColor:"#F2F2F380",borderRightWidth:1}]}>
                        <Text style={styles.donte_txt}>
                            Donate
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.donate}>
                        <Text style={styles.donte_txt}>
                            Fundraise
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
    
  )
}

export default User_wallet1

const styles = StyleSheet.create({
    price_cont:{
        height:257,
        width:"100",
        backgroundColor:"#1928B3",
        borderBottomRightRadius:32,
        borderBottomLeftRadius:32,
        ...Platform.select({
            ios: {
              shadowColor: '#1928B333',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation:5,
            },
        }),
    },
    notify:{
        marginTop:30,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:23
       
    },
    trust:{
        flexDirection:"row",
        alignItems:"center"
    },
    txt:{
        color:"white",
        fontWeight:"400",
        fontSize:14,
        lineHeight:16,
        fontFamily:"archivo",
        marginHorizontal:10
    },
    name_box:{
        paddingHorizontal:20
    },
    name:{
        textAlign:"center",
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"white"
    },
    amount_box:{
        paddingHorizontal:20,
        marginTop:20
    },
    amount:{
        textAlign:"center",
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:36,
        lineHeight:31,
        color:"#F2F3FD"
    },
    donate_box:{
        flexDirection:"row",
        alignItems:"center",
        width:"80%",
        borderWidth:1,
        borderColor:"#F2F2F380",
        height:42,
        borderRadius:10,
        paddingVertical:5
    },
    donate:{
        width:"50%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    },
    donte_txt:{
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:14,
        lineHeight:16,
        color:"#F2F3FD"
    },
    donate_cont:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:30
    }
})