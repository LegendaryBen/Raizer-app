import { StyleSheet,View } from 'react-native'


const Proceed3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader_box}>
            <View style={styles.loader}/>
      </View>
    </View>
  )
}

export default Proceed3

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:10
    },
    loader_box:{
        width:"100%",
        overflow:"hidden",
        height:4,
        borderRadius:16,
        backgroundColor:"#D2D6F4"
    },
    loader:{
        width:"50%",
        height:"100%",
        backgroundColor:"#1928B3",
        borderRadius:16
    }
})