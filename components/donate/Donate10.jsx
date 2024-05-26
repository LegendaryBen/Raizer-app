import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const Donate10 = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.txt_box}>
            <Text style={styles.txt}>Donate10</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Donate10

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    txt_box:{
        width:"100%",
        height:54,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1928B3",
        borderRadius:30
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        color:"#FFFFFF"
    }
})