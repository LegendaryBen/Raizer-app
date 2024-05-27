import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Proceed1 = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#4F4F4F" />
        </TouchableOpacity>
    </View>
  )
}

export default Proceed1

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20
    }
})