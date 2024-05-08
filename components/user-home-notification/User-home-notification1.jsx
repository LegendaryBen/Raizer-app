import { View,StyleSheet,TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const User_home_notification1 = () => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>navigation.goBack()}>
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