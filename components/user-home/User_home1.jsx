import { View,StyleSheet,Text,TouchableOpacity} from "react-native"
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const User_home1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.avatat_block}>
            <View style={styles.avatar}><Text style={styles.avatar_txt}>A</Text></View>
            <View><Text style={styles.raizer}>Raizer</Text></View>
        </View>
        <View style={styles.icon_box}>
            <TouchableOpacity>
              <View style={styles.icon_cont}>
                <Fontisto name="bell" size={24} color="#121D82" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon_cont}>
                <Ionicons name="search" size={24} color="#121D82" />
              </View>
            </TouchableOpacity>
           <TouchableOpacity>
              <View style={styles.icon_cont}>
                <MaterialIcons name="bookmark-outline" size={24} color="#121D82" />
              </View>
           </TouchableOpacity>
        </View>
    </View>
  )
}

export default User_home1


const styles = StyleSheet.create({
   container:{
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      alignItems:"center",
      padding:20
   },
   avatat_block:{
    flexDirection:"row",
    alignItems:"center"
   },
   avatar:{
      width:32,
      height:32,
      backgroundColor:"#8E8E9366",
      justifyContent:"center",
      alignItems:"center",
      marginRight:15,
      borderRadius:50
   },
   raizer:{
      fontSize:24,
      lineHeight:24,
      fontWeight:"700",
      fontFamily:"archivo",
      color:"#1928B3"
   },
   avatar_txt:{
      fontFamily:"archivo",
      color:"#4F4F4F",
      fontSize:17,
      lineHeight:20,
      fontWeight:"600"
   },
   icon_box:{
      flexDirection:"row",
      alignItems:"center"
   },
   icon_cont:{
      height:37,
      width:37,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#E9EBFC",
      marginLeft:13,
      borderRadius:7
   }
})