import { View,StyleSheet,ImageBackground,Image,Text } from "react-native"
import Wrapper from "../components/Wrapper"



const Landing = () => {
    return (
        <Wrapper>
            <ImageBackground style={styles.container} source={require('../assets/images/back.jpg')}>
                <Image source={require('../assets/images/Logo.png')} style={styles.logo}/>
                <Image source={require('../assets/images/Raizer.png')}/>
            </ImageBackground>
        </Wrapper>
    )
}


const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row'
    },
    logo:{
        marginRight:20
    }
})



export default Landing
