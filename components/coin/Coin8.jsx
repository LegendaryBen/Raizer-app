import { StyleSheet, Text, View } from 'react-native'


const Coin8 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.details}>
                <View style={styles.fee_box}>
                    <Text style={styles.fee} numberOfLines={1}>Amount(include transaction fee)</Text>
                </View>
                <View style={[styles.fee_box,{justifyContent:"flex-end"}]}>
                    <Text style={[styles.fee,{textAlign:"right"}]} numberOfLines={1}>
                        $166.87
                    </Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.fee_box}>
                    <Text style={styles.fee} numberOfLines={1}>Unit Price</Text>
                </View>
                <View style={[styles.fee_box,{justifyContent:"flex-end"}]}>
                    <Text style={[styles.fee,{textAlign:"right"}]} numberOfLines={1}>
                        1BTC = $60,000 
                    </Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.fee_box}>
                    <Text style={styles.fee} numberOfLines={1}>Network Fee</Text>
                </View>
                <View style={[styles.fee_box,{justifyContent:"flex-end"}]}>
                    <Text style={[styles.fee,{textAlign:"right"}]} numberOfLines={1}>
                        $1.37
                    </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Coin8

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        paddingHorizontal:20
    },
    box:{
        height:144,
        backgroundColor:"#E9EBFC",
        width:"100%",
        borderRadius:16,
        padding:16
    },
    details:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#8E8E9366",
        marginBottom:20
    },
    fee_box:{
        flexBasis:"48%"
    },
    fee:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"500",
        color:"#181818"
    }
})