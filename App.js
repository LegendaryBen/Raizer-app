import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Welcome from './screens/Welcome';

export default function App() {

  const [fontsLoaded] = useFonts({
    'archivo': require('./assets/fonts/Archivo-VariableFont_wdth,wght.ttf')
  });

  if(!fontsLoaded) return null;


  return (
    <SafeAreaProvider>
      <Welcome/>
    </SafeAreaProvider>
  )
}


