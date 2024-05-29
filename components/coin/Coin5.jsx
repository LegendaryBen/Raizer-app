import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Coin5 = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.price_box}>
            <Text style={styles.price} numberOfLines={1}>$50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price_box}>
            <Text style={styles.price} numberOfLines={1}>$100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price_box}>
            <Text style={styles.price} numberOfLines={1}>$200</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price_box}>
            <Text style={styles.price} numberOfLines={1}>$500</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price_box}>
            <Text style={styles.price} numberOfLines={1}>$1000</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Coin5

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    price_box:{
        flexBasis:"18%",
        paddingVertical:10,
        backgroundColor:"#E9EBFC",
        borderRadius:30
    },
    price:{
        textAlign:"center",
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#1928B3"
    }
})