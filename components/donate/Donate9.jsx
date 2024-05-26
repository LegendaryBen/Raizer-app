import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Donate9 = () => {

    const[check,setCheck] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.about} numberOfLines={1}>About Campaign</Text>
      <View style={styles.details_box}>
        <Text style={styles.details} numberOfLines={Number(`${check === true ? 4 :0 }`)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Turpis molestie gravida posuere in orci odio egestas. Consectetur
            dolor odio blandit nunc, in nec. Aliquam diam aenean ac 
            aliquam in dolor, dui phasellus elit. Quisque vel commodo in 
            leo turpis facilisis.
            Quis aliquet purus, leo quisque suspendisse purus nunc aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Turpis molestie gravida posuere in orci odio egestas. Consectetur
            dolor odio blandit nunc, in nec. Aliquam diam aenean ac 
            aliquam in dolor, dui phasellus elit. Quisque vel commodo in 
            leo turpis facilisis.
            Quis aliquet purus, leo quisque suspendisse purus nunc aliquam.
        </Text>
        <TouchableOpacity onPress={()=>setCheck(!check)}>
            <Text style={styles.readmore}>
                Read more
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Donate9

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20,
        width:"100%"
    },
    about:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        color:"#181818",
        fontWeight:"600"
    },
    details:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"400",
        color:"#4F4F4F"
    },
    details_box:{
        marginTop:10,
        overflow:"hidden"
    },
    readmore:{
        marginTop:5,
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"400",
        color:"#1928B3"
    }
})