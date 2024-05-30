import 'react-native-gesture-handler';
import Auth_context from './Context/Auth_context';
import AppFace from './AppFace';


export default function App() {

  return(
    <Auth_context>
      <AppFace/>  
    </Auth_context>
  )

}


