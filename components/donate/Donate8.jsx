import { StyleSheet,ImageBackground,View} from 'react-native'


const Donate8 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
            <ImageBackground style={styles.back} source={require('../../assets/images/map.jpg')}>

            </ImageBackground>
        </View>
       
    </View>
  )
}

export default Donate8

const styles = StyleSheet.create({
    container:{
        height:90,
        width:"100%",
        paddingHorizontal:20,
        marginTop:15,
    },
    back:{
        objectFit:"cover",
        width:"100%",
        height:"100%",
        borderRadius:8,
        overflow:"hidden"
    }
})