import 'react-native-gesture-handler';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Auth_Navigator from './Navigators/Auth_Navigator';
import Donate_Navigator from './Navigators/Donate_Navigator';


export default function App() {

  const [fontsLoaded] = useFonts({
    'archivo': require('./assets/fonts/Archivo-VariableFont_wdth,wght.ttf')
  });

  if(!fontsLoaded) return null;


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Donate_Navigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


