import { ScrollView } from "react-native"
import Wrapper from "../components/Wrapper"
import User_home1 from "../components/user-home/User_home1"
import User_home2 from "../components/user-home/User_home2"
import User_home3 from "../components/user-home/User_home3"
import User_home4 from "../components/user-home/User_home4"
import User_home5 from "../components/user-home/User_home5"
import User_home6 from "../components/user-home/User_home6"
import User_home7 from "../components/user-home/User_home7"
import User_home8 from "../components/user-home/User_home8"



const User_home = () => {
  return (
    <Wrapper color="#F2F3FD">
        <ScrollView style={{flex:1}}>
          <User_home1/>
          <User_home2/>
          <User_home3/>
          <User_home4/>
          <User_home5/>
          <User_home6/>
          <User_home7/>
          <User_home8/>
          <User_home8/>
          <User_home8/>
        </ScrollView>
    </Wrapper>
  )
}

export default User_home
