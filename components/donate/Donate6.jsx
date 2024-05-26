import { StyleSheet, Text, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';



const Donate6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txt_box}>
        <Text style={styles.txt}>
            QST Foundation
        </Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="verified" size={24} color="#F2994A" />
      </View>
    </View>
  )
}

export default Donate6

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:20
    },
    icon:{
        flexBasis:"auto",
        marginLeft:10
    },
    txt:{
        fontSize:14,
        lineHeight:16,
        color:"#181818",
        fontFamily:"archivo"
    }
})