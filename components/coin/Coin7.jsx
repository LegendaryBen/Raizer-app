import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';



const Coin7 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.icon_box}>
            <Feather name="info" size={14} color="#4F4F4F" />
        </View>
        <View>
            <Text style={styles.amount}>
                1BTC = $60,000 
            </Text>
        </View>
    </View>
  )
}

export default Coin7

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:5,
        flexDirection:"row",
        alignItems:"center"
    },
    amount:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"500",
        color:"#4F4F4F"
    },
    icon_box:{
        marginRight:5
    }
})