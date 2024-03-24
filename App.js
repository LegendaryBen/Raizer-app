import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Login from './screens/Login';

export default function App() {

  const [fontsLoaded] = useFonts({
    'archivo': require('./assets/fonts/Archivo-VariableFont_wdth,wght.ttf')
  });

  if(!fontsLoaded) return null;


  return (
    <SafeAreaProvider>
        <Login/>
    </SafeAreaProvider>
  )
}


