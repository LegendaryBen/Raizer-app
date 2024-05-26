import { StyleSheet, Text, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';




const Donate7 = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.cont,{flexWrap:"wrap"}]}>
            <View style={styles.field}>
                <Text style={styles.field_txt}>Education</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.field_txt}>Infrastructure</Text>
            </View>
        </View>
       <View style={[styles.cont,{justifyContent:"flex-end",flexWrap:"wrap",alignItems:"center"}]}>
            <View>
                <EvilIcons name="location" size={24} color="#4F4F4F" />
            </View>
            <View>
                <Text style={styles.add}>
                    Bougouni, Mali
                </Text>
            </View>
       </View>
    </View>
  )
}

export default Donate7

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10
    },
    field:{
        paddingHorizontal:7,
        paddingVertical:2,
        marginRight:10,
        backgroundColor:"#E9EBFC",
        borderRadius:15,
        marginBottom:5
    },
    field_txt:{
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"600",
        color:"#1928B3"
    },
    cont:{
        flexDirection:"row",
        alignItems:"center",
        flexBasis:"50%"
    },
    add:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        color:"#4F4F4F",
        fontWeight:"400"
    }
})