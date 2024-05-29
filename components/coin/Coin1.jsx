import { StyleSheet, Text, View } from 'react-native'


const Coin1 = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{text}</Text>
    </View>
  )
}

export default Coin1

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      marginTop:20
    },
    txt:{
      fontFamily:"archivo",
      fontSize:14,
      lineHeight:16,
      fontWeight:"500",
      color:"#4F4F4F"
    }
})