import { View,StyleSheet,FlatList } from "react-native"
import User_hom_search4 from "./User-home-search4"



const User_home_search3 = (props) => {

    
    const DATA = [
        {
        id: 1
        },
        {
        id: 2
        },
        {
        id:3
        },
        {
        id:4
        }
    ];




    return (
        <View style={styles.container}>
             <FlatList
                data={DATA}
                renderItem={({item}) => <User_hom_search4/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default User_home_search3


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        paddingHorizontal:20
    }
})