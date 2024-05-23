import { StyleSheet,View,FlatList } from 'react-native'
import User_wallet3 from './User-wallet3';


const User_wallet2 = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id:1,
            title: 'Third Item',
        },
        {
            id:2,
            title: 'Third Item',
        },
        {
            id:3,
            title: 'Third Item',
        },
        {
            id:4,
            title: 'Third Item',
        },
        {
            id:5,
            title: 'Third Item',
        },
        {
            id:6,
            title: 'Third Item',
        },
    ];


  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <User_wallet3/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default User_wallet2

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})