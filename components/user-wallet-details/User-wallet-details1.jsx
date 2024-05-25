import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const User_wallet_details1 = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#F2F3FD" />
          </TouchableOpacity>
          <View style={styles.txt_box}>
            <Text style={styles.bac_txt} numberOfLines={1}>
              Bitcoin (BTC)
            </Text>
          </View>
          <View/>
        </View>
        <View style={styles.img_box}>
            <Image source={require('../../assets/images/btc-logo.png')} style={styles.img}/>
        </View>
        <View style={styles.val_box}>
          <Text style={styles.val} numberOfLines={1}>
            0.0091375
          </Text>
        </View>
        <View style={styles.amt_box}>
            <Text style={styles.amt}>$365.50</Text>
        </View>

        <View style={styles.donate_cont}>
            <View style={styles.donate_box}>
              <TouchableOpacity style={[styles.donate,{borderRightColor:"#F2F2F380",borderRightWidth:1}]} onPress={()=>navigation.navigate("Home")}>
                <Text style={styles.donte_txt}>
                  Donate
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.donate} onPress={()=>navigation.navigate("Home")}>
                <Text style={styles.donte_txt}>
                  Fundraise
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        
    </View>
  )
}

export default User_wallet_details1

const styles = StyleSheet.create({
  container:{
    height:257,
    width:"100%",
    backgroundColor:"#1928B3",
    borderBottomRightRadius:32,
    borderBottomLeftRadius:32
  },
  back:{
    paddingHorizontal:20,
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:20
  },
  bac_txt:{
    color:"white",
    fontFamily:"archivo",
    fontSize:14,
    lineHeight:16,
    fontWeight:"500"
  },
  txt_box:{
    flexBasis:"40%",
    paddingHorizontal:5,
  },
  img:{
    width:32,
    height:32,
    borderRadius:50
  },
  img_box:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:20
  },
  val_box:{
    paddingHorizontal:20,
    marginTop:10
  },
  val:{
    fontFamily:"archivo",
    textAlign:"center",
    color:"white",
    fontSize:24,
    lineHeight:28
  },
  amt:{
    fontFamily:"archivo",
    fontSize:14,
    lineHeight:16,
    color:"#F2F3FDCC",
    fontWeight:"500"
  },
  amt_box:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:20,
    marginTop:10
  },
  donate_box:{
    flexDirection:"row",
    alignItems:"center",
    width:"80%",
    borderWidth:1,
    borderColor:"#F2F2F380",
    height:42,
    borderRadius:10,
    paddingVertical:5
},
donate:{
    width:"50%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:"100%"
},
donte_txt:{
    fontFamily:"archivo",
    fontWeight:"600",
    fontSize:14,
    lineHeight:16,
    color:"#F2F3FD"
},
donate_cont:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:30
}
})