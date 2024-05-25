import { StyleSheet, Text, View,Modal,TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const User_wallet_details3 = ({show,setShow}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false)
        }}>
            <View  style={styles.container}>
                <TouchableWithoutFeedback onPress={()=>setShow(false)}>
                    <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.2)"}}></View>
                </TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <View style={[styles.content]}>
                        <View style={styles.val_box}>
                            <Text style={styles.val} numberOfLines={1}>
                                0.001400 BTC 
                            </Text>
                        </View>
                        <View style={styles.amount_box}>
                            <Text style={styles.amount} numberOfLines={1}>
                                ~$165.50
                            </Text>
                        </View>
                        <View style={styles.large_box}>
                            <View style={styles.detail}>
                                <View>
                                    <Text style={styles.date}>
                                        Date
                                    </Text>
                                </View>
                                <View style={styles.detail_left}>
                                    <Text style={styles.detail_left_text} numberOfLines={1}>
                                        July 27, 8:25 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.detail}>
                                <View>
                                    <Text style={styles.date}>
                                        Date
                                    </Text>
                                </View>
                                <View style={styles.detail_left}>
                                    <Text style={[styles.detail_left_text,{color:"#1928B3"}]} numberOfLines={1}>
                                        Completed
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.detail}>
                                <View>
                                    <Text style={styles.date}>
                                        Date
                                    </Text>
                                </View>
                                <View style={styles.detail_left}>
                                    <Text style={[styles.detail_left_text,{color:"#1928B3"}]} numberOfLines={1}>
                                        0xDc9AE3AE3Ec8acA2768e1690DD20c76942552Fcf0xDc9AE3AE3Ec8acA2768e1690DD20c76942552Fcf
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.large_box,{height:45}]}>
                            <View style={[styles.detail,{marginBottom:0,marginTop:0}]}>
                                <View>
                                    <Text style={styles.date}>
                                        Network Fee
                                    </Text>
                                </View>
                                <View style={styles.detail_left}>
                                    <Text style={styles.detail_left_text} numberOfLines={1}>
                                        0.00010230011 BTC ($1.37)
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
    </Modal>
  )
}

export default User_wallet_details3

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        backgroundColor:"transparent"
    },
    modal:{
        width:"100%",
        height:363,
        backgroundColor:"rgba(0,0,0,0.2)",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        height:"100%",
        width:"100%",
        backgroundColor:"#F2F3FD",
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        overflow:"hidden",
        padding:20
    },
    val_box:{
        width:"100%",
        marginBottom:0
    },
    val:{
        fontSize:24,
        lineHeight:28,
        fontWeight:"600",
        textAlign:"center",
        color:"#181818",
        fontFamily:"archivo"
    },
    amount:{
        fontFamily:"archivo",
        textAlign:"center",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"black"
    },
    amount_box:{
        width:"100%",
        marginBottom:23
    },
    large_box:{
        width:"100%",
        height:192,
        backgroundColor:"#E9EBFC",
        overflow:"hidden",
        borderRadius:16,
        padding:10,
        marginBottom:20

    },
    detail:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#8E8E9366",
        paddingBottom:10,
        marginBottom:27
    },
    detail_left:{
        flexBasis:"50%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    detail_left_text:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"600",
        color:"#181818"
    },
    date:{
        fontFamily:"archivo",
        color:"#181818",
        fontSize:14,
        lineHeight:16,
        fontWeight:"400"
    }
})