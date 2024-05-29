import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Coin2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text numberOfLines={1} style={styles.txt}>
            0x7a4238E566D0f8871b4CE9eBCDAA7Df5367e38D3
        </Text>
      </View>
    </View>
  )
}

export default Coin2

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        paddingHorizontal:20
    },
    box:{
        height:44,
        backgroundColor:"#F2F2F380",
        borderWidth:1,
        borderColor:"#8E8E9366",
        borderRadius:4,
        padding:10,
        alignItems:"center",
        flexDirection:"row"
    },
    txt:{
        fontSize:11,
        lineHeight:13,
        fontWeight:"500",
        fontFamily:"archivo",
        color:"#8E8E93"
    }
})