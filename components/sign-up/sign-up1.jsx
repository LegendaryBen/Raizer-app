import { View,Image,StyleSheet,TouchableOpacity } from "react-native";



const Sign_up1 = ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../assets/images/back.png')} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20,
        marginTop:40
    },
    image:{
        height:24,
        width:24,
        objectFit:"contain"
    }
})


export default Sign_up1;