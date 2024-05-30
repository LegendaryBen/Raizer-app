import Wrapper from "../components/Wrapper";
import { Alert, ScrollView,StyleSheet} from "react-native";
import Sign_up1 from "../components/sign-up/sign-up1";
import Sign_up2 from "../components/sign-up/sign-up2";
import Sign_up3 from "../components/sign-up/sign-up3";
import Sign_up4 from "../components/sign-up/sign-up4";
import Sign_up5 from "../components/sign-up/sign-up5";
import Sign_up6 from "../components/sign-up/sign-up6";
import Sign_up7 from "../components/sign-up/sign-up7";
import Sign_up8 from "../components/sign-up/sign-up8";
import { useState,useContext } from "react";
import { Auth } from "../Context/Auth_context";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Sign_up = ()=>{


    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const{login,setLogin} = useContext(Auth);



    const submit = async ()=>{

        if(email === '' || password === ''){

            Alert.alert("Input Fields must not be empty");

        }else{

            let data = JSON.stringify({
                loading:false,
                token:'',
                user:{
                    email,
                    password
                }
            })

            try {
                await AsyncStorage.setItem('key', data);

                Alert.alert("User has been created")

              } catch (e) {

                  Alert.alert("Error occured while creating user")

              }

        }

    }


    return(
        <Wrapper color="#F2F3FD">
            <ScrollView style={styles.container}>
                <Sign_up1/>
                <Sign_up2/>
                <Sign_up3/>
                <Sign_up4 val={email} func={setEmail}/>
                <Sign_up5 val={password} func={setPassword}/>
                <Sign_up6/>
                <Sign_up7 submit={submit}/>
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

