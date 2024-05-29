import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Proceed5 = () => {

    const navigation = useNavigation();

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: '2',
            title: 'Third Item',
        },
        {
            id: '1',
            title: 'Third Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Third Item',
        },
        {
            id: '5',
            title: 'Third Item',
        },
        {
            id: '6',
            title: 'Third Item',
        },
    ];
      

  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({item}) => {

                return(
                    <TouchableOpacity style={styles.coin_box} onPress={()=>navigation.navigate("Coin")}>
                        <View style={styles.coin_ctn}>
                            <Image style={styles.img} source={require('../../assets/images/btc-logo.png')}/>
                            <View style={styles.txt_box}>
                                <Text style={styles.coin_name} numberOfLines={1}>
                                    Bitcoin
                                </Text>
                                <Text style={styles.coin_sym} numberOfLines={1}>
                                    BTC
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.coin_ctn,{justifyContent:"flex-end"}]}>
                            <View style={styles.coin_ctn}>
                                <View style={styles.txt_box}>
                                    <Text style={[styles.coin_name,{textAlign:"right"}]} numberOfLines={1}>
                                        $365.50
                                    </Text>
                                    <Text style={[styles.coin_sym,{textAlign:"right"}]} numberOfLines={1}>
                                        0.0091375
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> 
                )

                }
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Proceed5

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    coin_box:{
        height:76,
        borderBottomWidth:1,
        borderBottomColor:"#8E8E9366",
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"      
    },
    coin_ctn:{
        flexBasis:"50%",
        flexDirection:"row"
    },
    img:{
        height:44,
        width:44,
        borderRadius:50,
        marginRight:10
    },
    txt_box:{
        flex:1
    },
    coin_name:{
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        fontFamily:"archivo",
        color:"black",
        marginBottom:5
    },
    coin_sym:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#8E8E93",
        fontFamily:"archivo"
    }
})



