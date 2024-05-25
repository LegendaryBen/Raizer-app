import { StyleSheet,View,SectionList,Text,Image,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const User_wallet_details2 = ({setShow}) => {

    const DATA = [
        {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
    ];
      

  return (
    <View style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={()=>setShow(true)}>
                    <View style={styles.img_cont}>
                        <View style={styles.img_box}>
                            <MaterialCommunityIcons name="arrow-collapse-down" size={24} color="#1928B3" />
                        </View>
                        <View style={styles.txt_box}>
                            <Text numberOfLines={1} style={styles.donate}>Donation</Text>
                            <Text numberOfLines={1} style={styles.add}>0x7a4238E566D0f8871b4CE9</Text>
                        </View>
                    </View>
                    <View style={styles.val_box}>
                        <Text style={styles.val} numberOfLines={1}>
                            0.001400
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title}}) => (
                <View style={styles.header_box}>
                    <Text style={styles.header_txt} numberOfLines={1}>July 27, 2022</Text>
                </View>
            )}
        />
    </View>
  )
}

export default User_wallet_details2

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header_box:{
        paddingHorizontal:20,
        marginTop:40
    },
    header_txt:{
        fontFamily:"archivo",
        fontWeight:"500",
        fontSize:14,
        lineHeight:16,
        color:"#4F4F4F"
    },
    item:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        height:82,
        borderBottomWidth:1,
        borderBottomColor:"#8E8E93"
    },
    img_cont:{
        flexDirection:"row",
        alignItems:"flex-start",
        flexBasis:"50%"
    },
    img_box:{
        width:50,
        height:50,
        backgroundColor:"#E9EBFC",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
        borderRadius:10
    },
    txt_box:{
        flex:1,
        paddingRight:2
    },
    donate:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"600",
        color:"black",
        marginBottom:10
    },
    add:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        color:"#8E8E93",
        fontWeight:"500"
    },
    val_box:{
        flexBasis:"50%",
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingLeft:3
    },
    val:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#27AE60"
    }
})