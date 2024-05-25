import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User_wallet from '../screens/User-wallet';
import User_wallet_details from '../screens/User-wallet-details';




const Stack = createNativeStackNavigator();


function Wallet_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Wallet-home" component={User_wallet} />
      <Stack.Screen name="Wallet-details" component={User_wallet_details} />
    </Stack.Navigator>
  );
}


export default Wallet_Navigator;