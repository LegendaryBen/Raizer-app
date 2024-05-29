import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const Coin3 = () => {
  return (
    <View style={styles.container}> 
        <View style={styles.box}>
            <View style={styles.txt_box}>
                <Text style={styles.txt} numberOfLines={1}>
                    QST Foundation
                </Text>
            </View>
            <View style={styles.icon_box}>
                <MaterialIcons name="verified" size={18} color="#F2994A" />
            </View>
        </View>
    </View>
  )
}

export default Coin3

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        paddingHorizontal:20,
        marginBottom:20
    },
    box:{
        borderRadius:8,
        height:40,
        width:"100%",
        backgroundColor:"#F2994A26",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingHorizontal:10,
    },
    txt:{
        flexBasis:"auto",
        fontWeight:"600",
        fontSize:14,
        lineHeight:16,
        color:"#F2994A"
    },
    icon_box:{
        flexBasis:25
    },
    txt_box:{
        paddingRight:1,
        flexBasis:"auto"
    }
})