import { View,StyleSheet,TextInput} from "react-native"



const User_home_search1 = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Children"
            />
        </View>
    )
}

export default User_home_search1


const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:10,
        marginBottom:10
    },
    input: {
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderColor:"#8E8E9366",
        backgroundColor:"#F2F2F380",
        borderRadius:4,
        width:"100%",
        color:"#4F4F4F",
        fontSize:17,
        lineHeight:20,
        fontWeight:"500",
        fontFamily:"archivo"
    },
})