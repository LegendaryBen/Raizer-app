import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User_home from '../screens/User-home';
import User_home_search from '../screens/User-home-search';
import User_home_notification from '../screens/User-home-notification';
import User_home_bookmark from '../screens/User-home-bookmark';




const Stack = createNativeStackNavigator();

function Home_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="user_home" component={User_home} />
      <Stack.Screen name="user_search" component={User_home_search} />
      <Stack.Screen name="user_bookmark" component={User_home_bookmark} />
      <Stack.Screen name="user_notification" component={User_home_notification} />
    </Stack.Navigator>
  );
}

export default Home_Navigator