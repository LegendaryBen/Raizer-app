import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';



const Proceed2 = ({text}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>
           {text}
        </Text>
        <TouchableOpacity style={styles.btn}>
            <Feather name="x" size={24} color="#1928B3" />
        </TouchableOpacity>
    </View>
  )
}

export default Proceed2

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    txt:{
        fontFamily:"archivo",
        color:"#181818",
        fontSize:24,
        lineHeight:28,
        fontWeight:"600"
    },
    btn:{
        height:37,
        width:34,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        backgroundColor:"#E9EBFC"
    }
})