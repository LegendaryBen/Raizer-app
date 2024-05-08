import { View,Text,StyleSheet } from "react-native"



const User_hom_search2 = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Search results</Text>
            </View>
            <View>
                <Text style={styles.txt}>3 found</Text>
            </View>
        </View>
    )
}

export default User_hom_search2


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:10
    },
    txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"400",
        color:"#4F4F4F"
    }
})