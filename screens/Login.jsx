import {Text,ScrollView,StyleSheet,View} from "react-native";
import Wrapper from "../components/Wrapper";
import Login1 from "../components/login/login1";
import Login2 from "../components/login/login2";
import Login3 from "../components/login/login3";
import Login4 from "../components/login/login4";
import Login5 from "../components/login/login5";
import Login6 from "../components/login/login6";
import Login7 from "../components/login/login7";



const Login = ()=>{

    return(
        <Wrapper color="#F2F3FD">
            <ScrollView style={[styles.scrollview]}>
                <Login1/>
                <Login2/>
                <Login3/>
                <Login4/>
                <Login5/>
                <Login6/>
                <Login7/>
            </ScrollView>
        </Wrapper>
    )

}

const styles = StyleSheet.create({
    scrollview:{
        flex:1
    }
})

export default Login;