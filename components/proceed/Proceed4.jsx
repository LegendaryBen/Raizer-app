import { StyleSheet,View,TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';



const Proceed4 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.search_box}>
            <View style={styles.search}>
                <EvilIcons name="search" size={27} color="#3C3C4399" />
            </View>
            <TextInput style={styles.input} placeholder='Search coin'/>
        </View>
    </View>
  )
}

export default Proceed4

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:20
    },
    input:{
        flex:1,
        fontSize:17,
        lineHeight:20,
        fontFamily:"archivo",
        fontWeight:"500",
        height:"100%",
        textAlignVertical:"center",
        color:"#8E8E93"
    },
    search:{
        marginRight:10
    },
    search_box:{
        width:"100%",
        backgroundColor:"#F2F2F380",
        height:44,
        borderRadius:4,
        borderWidth:1,
        borderColor:"#8E8E9366",
        flexDirection:"row",
        alignItems:"center",
        padding:10
    }
})