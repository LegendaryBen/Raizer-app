import { View,StyleSheet,TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';



const User_home_bookmark1 = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{width:24}}>
                <Ionicons name="arrow-back" size={24} color="#4F4F4F" />
            </TouchableOpacity>
        </View>
    )
}

export default User_home_bookmark1


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:20
    }
})