import { View,Text,Button } from "react-native"
import Wrapper from "../components/Wrapper"


const Donate = ({navigation}) => {
    return (
        <Wrapper>
            <Text>Donate</Text>
            <Button title="back" onPress={()=>navigation.goBack()}/>
        </Wrapper>
    )
}

export default Donate
