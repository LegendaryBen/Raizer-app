import { StyleSheet,View,ImageBackground,Platform,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Donate1 = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.image_cont}>
        <ImageBackground style={styles.back} source={require('../../assets/images/people.jpg')}>
            <View style={styles.mark}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.book}>
                    <Feather name="bookmark" size={21} color="#121D82" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Donate1

const styles = StyleSheet.create({
    image_cont:{
        height:210,
        width:"100%",
        ...Platform.select({
            ios: {
              shadowColor: '#1928B326',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
            },
            android: {
              elevation:3,
            },
        }),
        overflow:"hidden",
        borderBottomLeftRadius:26,
        borderBottomRightRadius:26
    },
    back:{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    },
    mark:{
        paddingHorizontal:20,
        marginTop:30,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    book:{
        width:26,
        height:29,
        backgroundColor:"#E9EBFC",
        borderRadius:8,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})