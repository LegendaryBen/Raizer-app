import { View,Text,TextInput,StyleSheet } from "react-native"


const User_notification_campaign4 = ({warn,title,place}) => {
    return (
        <View style={styles.container}>
            <View style={styles.txt_box}>
                <Text style={styles.txt}>
                    {title}
                    {warn && <Text style={{color:"red"}}>*</Text>}
                </Text>
            </View>
            <View styles={styles.input_box}>
                <TextInput style={styles.input} placeholder={place}/>
            </View>
        </View>
    )
}

export default User_notification_campaign4


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:35
    },
    txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#4F4F4F"
    },
    txt_box:{
        marginBottom:10
    },
    input:{
        width:"100%",
        height:44,
        borderColor:"#8E8E9366",
        borderWidth:1,
        padding:10,
        borderRadius:5,
        backgroundColor:"#F2F2F380",
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500"
    },
    
})