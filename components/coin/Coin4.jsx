import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Coin4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text numberOfLines={1} style={styles.txt}>
            $165.50
        </Text>
      </View>
    </View>
  )
}

export default Coin4

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
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        fontFamily:"archivo",
        color:"#181818"
    }
})