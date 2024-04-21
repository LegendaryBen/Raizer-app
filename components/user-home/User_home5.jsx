import { View,StyleSheet,Text } from "react-native"

const User_home5 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Near by</Text>
    </View>
  )
}

export default User_home5


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20
    },
    txt:{
        fontFamily:"archivo",
        color:"#181818",
        fontSize:19,
        lineHeight:20,
        fontWeight:"600"
    }
})