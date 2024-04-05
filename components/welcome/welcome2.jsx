import { View,StyleSheet } from "react-native"


const Welcome2 = ({pos}) => {

    const data = [
        {id:1,track:"F"},
        {id:2,track:"S"},
        {id:3,track:"T"}
    ]

  return (
    <View style={styles.container}>
        {data.map((item)=> <View key={item.id} style={[styles.dots,pos == item.track && {backgroundColor:"#1928B3"}]}></View>)}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    dots:{
        height:10,
        width:10,
        borderWidth:1,
        borderColor:"#1928B3",
        marginLeft:7,
        borderRadius:50
    }
})



export default Welcome2
