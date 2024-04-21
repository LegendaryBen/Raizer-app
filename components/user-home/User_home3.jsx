import { View,Text,StyleSheet } from "react-native"

const User_home3 = () => {
  return (
     <View style={styles.container}>
        <Text style={styles.text}>Categories</Text>
     </View>
  )
}

export default User_home3

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:24
    },
    text:{
        fontFamily:"archivo",
        fontSize:19,
        lineHeight:20,
        color:"#181818",
        fontWeight:"600"
    }
})