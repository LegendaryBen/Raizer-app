import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const User_wallet3 = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("Wallet-details")}>
        <View style={styles.img_cont}>
            <Image style={styles.img} source={require('../../assets/images/btc-logo.png')}/>
            <View style={styles.token_cont}>
                <View style={styles.token_box}>
                    <Text numberOfLines={1} style={styles.token_name}>
                        Bitcoin
                    </Text>
                </View>
                <Text numberOfLines={1} style={styles.symbol}>
                    BTC
                </Text>
            </View>
        </View>
        <View style={styles.price_box}>
            <View style={styles.amount}>
                <Text style={styles.amount_txt} numberOfLines={1}>
                    $365.50
                </Text>
            </View>
            <View style={styles.val}>
                <Text style={styles.val_txt} numberOfLines={1}>
                    0.0091375
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )

}


export default User_wallet3


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:80,
        borderBottomColor:"#8E8E9366",
        borderBottomWidth:1,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center"
    },
    img:{
        width:44,
        height:44,
        objectFit:"cover",
        marginRight:10,
        borderRadius:50
    },
    img_cont:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"50%",
        height:"100%",
        paddingRight:10
    },
    token_name:{
        fontSize:17,
        lineHeight:20,
        fontWeight:'600',
        fontFamily:"archivo",
        color:"#181818"
    },
    symbol:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#8E8E93"
    },
    token_cont:{
        flex:1
    },
    token_box:{
        marginBottom:5
    },
    price_box:{
        width:"50%"
    },
    amount:{
        width:"100%",
        paddingLeft:10,
        marginBottom:5
    },
    val:{
        width:"100%",
        paddingLeft:10
    },
    amount_txt:{
        textAlign:"right",
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        color:"#181818",
        fontWeight:"600"
    },
    val_txt:{
        textAlign:"right",
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#8E8E93"
    }
})