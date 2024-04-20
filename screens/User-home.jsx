import { ScrollView } from "react-native"
import Wrapper from "../components/Wrapper"
import User_home1 from "../components/user-home/User_home1"
import User_home2 from "../components/user-home/User_home2"


const User_home = () => {
  return (
    <Wrapper color="#F2F3FD">
        <ScrollView style={{flex:1}}>
          <User_home1/>
          <User_home2/>
        </ScrollView>
    </Wrapper>
  )
}

export default User_home
