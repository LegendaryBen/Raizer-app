import { View,FlatList,Text,StyleSheet,TouchableOpacity } from "react-native"
import { useState } from "react";



const User_home4 = () => {

    const [track,setTrack] = useState(1)

    const DATA = [
        {
        id: 1,
        title: 'All',
        },
        {
        id: 2,
        title: 'Medical',
        },
        {
        id: 3,
        title: 'Education',
        },
        {
        id: 4,
        title: 'Orphanage',
        },
        {
        id: 5,
        title: 'Disaster',
        },
        {
        id: 6,
        title: 'Infrastructure',
        }
        
    ];



    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => {

                const change =()=>{
                    setTrack(item.id)
                }

                 return(
                    <TouchableOpacity onPress={change}>
                        <View style={[styles.cat_box,{backgroundColor:item.id !== track?"#E9EBFC":"#1928B3"}]}>
                            <Text style={[styles.cat_txt,{color:item.id !== track?"#1928B3":"white"}]}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                    )

                }}
                keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default User_home4


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:15
    },
    cat_box:{
        paddingVertical:10,
        paddingHorizontal:20,
        marginRight:10,
        borderRadius:20
    },
    cat_txt:{
        fontFamily:"archivo",

    }
})