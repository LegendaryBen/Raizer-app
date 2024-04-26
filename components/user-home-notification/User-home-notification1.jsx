import { View,StyleSheet,TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';



const User_home_notification1 = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <AntDesign name="arrowleft" size={24} color="#4F4F4F" />
      </View>
    </TouchableOpacity>
   
  )
}

export default User_home_notification1


const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      marginTop:20
    }
})