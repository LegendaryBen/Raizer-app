import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const Coin9 = ({val,func}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={()=>func(true)}>
            <Text style={styles.txt}>Donate</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Coin9

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:30,
        marginBottom:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    btn:{
        height:54,
        borderRadius:30,
        backgroundColor:"#1928B3",
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        color:"#FFFFFF"
    }
})