import User_home8 from "../user-home/User_home8"
import { View,FlatList } from "react-native"


const User_home_bookmark4 = () => {

    const DATA = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
    ];

  return (
    <>
        <View style={{width:"100%",height:30}}/>
        <View style={{flex:1}}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <User_home8/>}
                keyExtractor={item => item.id}
            />
        </View>
    </>
  )
}

export default User_home_bookmark4
