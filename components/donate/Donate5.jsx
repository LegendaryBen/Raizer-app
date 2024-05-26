import { StyleSheet, Text, View } from 'react-native'


const Donate5 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.target_box}>
            <Text style={styles.target} numberOfLines={1}>
                Target:
                <Text style={styles.price}>
                    $21,000
                </Text>
            </Text>
        </View>
        <View style={[styles.target_box,{justifyContent:"flex-end"}]}>
            <Text style={styles.target} numberOfLines={1}>
                Raised:
                <Text style={styles.price}>
                    $4,410
                </Text>
            </Text>
        </View>
    </View>
  )
}

export default Donate5

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        marginTop:5
    },
    target:{
        marginRight:3,
        fontFamily:'archivo',
        fontSize:11,
        lineHeight:13,
        fontWeight:"600",
        color:"#4F4F4F"
    },
    target_box:{
        flexDirection:"row",
        alignItems:"center",
        flexBasis:"50%"
    },
    price:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"600",
        color:"#1928B3"
    }
})