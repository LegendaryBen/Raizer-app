import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User_notification from '../screens/User-notification';
import User_wallet from '../screens/User-wallet';
import User_profile from '../screens/User-profile';
import User_home_bookmark from '../screens/User-home-bookmark';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

function Profile_Navigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let specialcolor;
          const def2 = "white"
          const def = "#1928B3"

          if (route.name === 'Home') {
            iconName = "home-outline";
            specialcolor = focused ? def2 : def;

          } else if (route.name === 'Notifications') {

            iconName = "edit";
            specialcolor = focused ? def2 : def;

          }else if (route.name === "Wallet"){

            iconName = "wallet-outline";
            specialcolor = focused ? def2 : def;

          }else if (route.name === "Settings"){

            iconName = "user";
            specialcolor = focused ? def2 : def;

          }

          if(route.name == "Home" || route.name == "Wallet"){

            return <Ionicons name={iconName} size={size} color={specialcolor} />;

          }else{

            return <Feather name={iconName} size={size} color={specialcolor} />;
          }

          
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveBackgroundColor:'#1928B3',
        tabBarInactiveBackgroundColor:'#E9EBFC',
        tabBarItemStyle:{
            borderRadius:12,
            marginHorizontal:20,
            marginVertical:10
        },
        tabBarStyle:{
            height:70,
            backgroundColor:"#F2F3FD"
        }
      })}>
      <Tab.Screen name="Home" component={User_home_bookmark} />
      <Tab.Screen name="Notifications" component={User_notification} />
      <Tab.Screen name="Wallet" component={User_wallet} />
      <Tab.Screen name="Settings" component={User_profile} />
    </Tab.Navigator>
  );
}


export default Profile_Navigator;