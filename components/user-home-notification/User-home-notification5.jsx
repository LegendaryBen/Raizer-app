import {View,StyleSheet,FlatList} from "react-native"
import User_home_notification6 from "./User-home-notification6";


const User_home_notification5 = (props) => {

    const DATA = [
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        },
        {
            id:4
        },
        {
            id:5
        },
        {
            id:6
        },
        {
            id:7
        },
        {
            id:8
        },
        {
            id:9
        },
        {
            id:10
        },
    ];


    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) =><User_home_notification6/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default User_home_notification5


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        marginTop:20,
    }
})