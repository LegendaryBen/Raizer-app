import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Donate2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img_box}>
            <Image style={[styles.img,{zIndex:1}]} source={require("../../assets/images/people4.jpg")}/>
            <Image style={[styles.img,{zIndex:2,left:14}]} source={require("../../assets/images/people2.jpg")}/>
            <Image style={[styles.img,{zIndex:3,left:29}]} source={require("../../assets/images/people3.jpg")}/>
      </View>
      <View style={styles.txt_box}>
        <Text numberOfLines={1} style={styles.txt}>
            767+ people donated
        </Text>
      </View>
    </View>
  )
}

export default Donate2

const styles = StyleSheet.create({
    img_box:{
        width:54,
        flexDirection:"row",
        alignItems:"center",
       marginRight:5
    },
    txt_box:{
        flex:1
    },
    txt:{
        fontSize:11,
        lineHeight:13,
        color:"#4F4F4F",
        fontWeight:'400',
        fontFamily:"archivo"
    },
    img:{
        objectFit:"cover",
        width:20,
        height:20,
        position:"absolute",
        borderRadius:50
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        paddingHorizontal:20
    }
})