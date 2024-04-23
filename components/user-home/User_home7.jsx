import { View,StyleSheet,Text} from "react-native"

const User_home7 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Donate</Text>
    </View>
  )
}

export default User_home7


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20
    },
    txt:{
        fontFamily:"archivo",
        fontSize:18,
        lineHeight:20
    }
})