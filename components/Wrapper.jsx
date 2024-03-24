import { View,StyleSheet} from "react-native";
import { useSafeAreaInsets} from 'react-native-safe-area-context';



const Wrapper = ({children,color})=>{

    const insets = useSafeAreaInsets()

    return (

        <View style={[styles.container,{paddingLeft:insets.left,paddingRight:insets.right,paddingBottom:insets.bottom,paddingTop:insets.top,backgroundColor:color}]}>
            {children}
        </View>

    )


}



const styles = StyleSheet.create({
    container:{
      flex:1
    }
})


export default Wrapper;