import Wrapper from "../components/Wrapper";
import { ScrollView,StyleSheet } from "react-native";
import Sign_up1 from "../components/sign-up/sign-up1";
import Sign_up2 from "../components/sign-up/sign-up2";
import Sign_up3 from "../components/sign-up/sign-up3";
import Sign_up4 from "../components/sign-up/sign-up4";
import Sign_up5 from "../components/sign-up/sign-up5";
import Sign_up6 from "../components/sign-up/sign-up6";
import Sign_up7 from "../components/sign-up/sign-up7";
import Sign_up8 from "../components/sign-up/sign-up8";



const Sign_up = ()=>{

    return(
        <Wrapper color="#F2F3FD">
            <ScrollView style={styles.container}>
                <Sign_up1/>
                <Sign_up2/>
                <Sign_up3/>
                <Sign_up4/>
                <Sign_up5/>
                <Sign_up6/>
                <Sign_up7/>
                <Sign_up8/>
            </ScrollView>
        </Wrapper>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


export default Sign_up;

