import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User_notification from '../screens/User-notification';
import User_notification_campaign from '../screens/User-notification-campaign';



const Stack = createNativeStackNavigator();

function Campaign_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Campaign_home" component={User_notification} />
      <Stack.Screen name="Start_campaign" component={User_notification_campaign} />
    </Stack.Navigator>
  );
}


export default Campaign_Navigator