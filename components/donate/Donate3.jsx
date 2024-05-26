import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Donate3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt} numberOfLines={2}>
        Donate to help build schools in mali
    </Text>
    </View>
  )
}

export default Donate3

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        width:"100%",
        marginTop:20
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        color:"#181818"
    }
})