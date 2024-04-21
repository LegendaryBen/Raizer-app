import { ScrollView } from "react-native"
import Wrapper from "../components/Wrapper"
import User_home1 from "../components/user-home/User_home1"
import User_home2 from "../components/user-home/User_home2"
import User_home3 from "../components/user-home/User_home3"
import User_home4 from "../components/user-home/User_home4"




const User_home = () => {
  return (
    <Wrapper color="#F2F3FD">
        <ScrollView style={{flex:1}}>
          <User_home1/>
          <User_home2/>
          <User_home3/>
          <User_home4/>
        </ScrollView>
    </Wrapper>
  )
}

export default User_home
