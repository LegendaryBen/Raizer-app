import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User_profile from '../screens/User-profile';
import Home_Navigator from './Home_Navigator';
import Campaign_Navigator from './Campaign_Navigator';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Wallet_Navigator from './Wallet_Navigator';


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
      <Tab.Screen name="Home" component={Home_Navigator} />
      <Tab.Screen name="Notifications" component={Campaign_Navigator} />
      <Tab.Screen name="Wallet" component={Wallet_Navigator} />
      <Tab.Screen name="Settings" component={User_profile} />
    </Tab.Navigator>
  );
}


export default Profile_Navigator;