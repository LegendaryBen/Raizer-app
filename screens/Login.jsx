import {ScrollView,StyleSheet,Alert} from "react-native";
import { useEffect,useState,useContext } from "react";
import Wrapper from "../components/Wrapper";
import Login1 from "../components/login/login1";
import Login2 from "../components/login/login2";
import Login3 from "../components/login/login3";
import Login4 from "../components/login/login4";
import Login5 from "../components/login/login5";
import Login6 from "../components/login/login6";
import Login7 from "../components/login/login7";
import { Auth } from "../Context/Auth_context";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation})=>{

    const{login,setLogin} = useContext(Auth)


    useEffect(()=>{

        navigation.addListener("beforeRemove",(e)=>{
            e.preventDefault()
        })

        return ()=>{
            navigation.removeListener("beforeRemove")
        }

    },[])


    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('');


    const submit = async () => {

        if(email === '' || password === ''){
            Alert.alert("Input fields must not be empty")
        }else{


                try {
                  let value = await AsyncStorage.getItem('key');

                  value = JSON.parse(value)


                  if (value !== null) {
                    
                        if(
                            value.user.email === email && value.user.password === password
                        ){

                            let data = JSON.stringify({
                                loading:false,
                                token:'user',
                                user:{
                                    email,
                                    password
                                }
                            })


                            await AsyncStorage.setItem('key', data);

                            setLogin({
                                loading:false,
                                token:"user",
                                user:{
                                    email:value.user.email,
                                    password:value.user.password
                                }
                            })
                        }else{
                            Alert.alert("User does not exit1")
                        }
                    
                  }else{
                        Alert.alert("User does not exit2")
                  }

                } catch (e) {
                  
                    Alert.alert("Error while fetching user!")

                }

        }

    }


    return(
        <Wrapper color="#F2F3FD">
            <ScrollView style={[styles.scrollview]}>
                <Login1/>
                <Login2/>
                <Login3 val={email} func={setEmail}/>
                <Login4 val={password} func={setPassword}/>
                <Login5/>
                <Login6 submit={submit}/>
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