import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Sign_up from '../screens/Sign-up';
import Welcome from '../screens/Welcome';



const Stack = createNativeStackNavigator();


function Auth_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign-Up" component={Sign_up} />
    </Stack.Navigator>
  );
}


export default Auth_Navigator