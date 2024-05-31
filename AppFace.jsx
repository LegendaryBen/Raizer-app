import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Auth_Navigator from './Navigators/Auth_Navigator';
import Donate_Navigator from './Navigators/Donate_Navigator';
import { useEffect,useContext } from 'react';
import Landing from './screens/Landing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from './Context/Auth_context';




const AppFace = () => {

    const{login,setLogin} = useContext(Auth)

    const [fontsLoaded] = useFonts({
      'archivo': require('./assets/fonts/Archivo-VariableFont_wdth,wght.ttf')
    });


    useEffect(()=>{

        const getData = async () => {
          try {

            let value = await AsyncStorage.getItem('key');

             value = JSON.parse(value);

            if (value !== null) {
                if(value.token !== ""){
                  setLogin({
                    loading:false,
                    token:value.token,
                    user:{
                      email:value.user.email,
                      password:value.user.password
                    }
                  })
                }else{
                  setLogin({
                    loading:false,
                    token:"",
                    user:{
                      email:'',
                      password:''
                    }
                   })
                }
            }else{

              setLogin({
                loading:false,
                token:"",
                user:{
                  email:'',
                  password:''
                }
               })

            }
          } catch (e) {
            setLogin({
              loading:false,
              token:"",
              user:{
                email:'',
                password:''
              }
            })
          }
        };

        setTimeout(()=>{

          getData()

        },3000)
    
      },[])
    
    
    
    
      if(!fontsLoaded) return null;
    
      if(login.loading === true){
         return (
          <SafeAreaProvider>
            <NavigationContainer>
              <Landing/>
            </NavigationContainer>
          </SafeAreaProvider>
         )
      }
    
    
      return (
        <SafeAreaProvider>
          <NavigationContainer>
              {
                login.token === "" ? <Auth_Navigator/> : <Donate_Navigator/>
              }
          </NavigationContainer>
        </SafeAreaProvider>
      )
}

export default AppFace