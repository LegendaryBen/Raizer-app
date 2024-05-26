import { StyleSheet, Text, View } from 'react-native'


const Donate4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader_cont}>
        <View style={styles.loader_box}>
            <View style={styles.loader}></View>
        </View>
      </View>
      <View style={styles.raised}>
        <Text style={styles.txt}>Raised</Text>
        <Text style={styles.txt}>21%</Text>
      </View>
    </View>
  )
}

export default Donate4

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    loader_cont:{
        paddingHorizontal:20
    },
    loader_box:{
        width:"100%",
        overflow:"hidden",
        height:8,
        borderRadius:16,
        backgroundColor:"#D2D6F4"
    },
    loader:{
        width:"50%",
        height:"100%",
        backgroundColor:"#1928B3",
        borderRadius:16
    },
    raised:{
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10
    },
    txt:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        color:"#4F4F4F"
    }
})