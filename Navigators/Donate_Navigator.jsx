import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Donate from '../screens/Donate';
import Profile_Navigator from './Profile_Navigator';

const Stack = createNativeStackNavigator();

function Donate_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Profile" component={Profile_Navigator} />
      <Stack.Screen name="Donate" component={Donate} />
    </Stack.Navigator>
  );
}


export default Donate_Navigator;