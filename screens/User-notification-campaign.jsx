import Wrapper from "../components/Wrapper"
import User_notification_campaign1 from "../components/user-notification-campaign/User-notification-campaign1"
import User_notification_campaign2 from "../components/user-notification-campaign/User-notification-campaign2"
import User_notification_campaign3 from "../components/user-notification-campaign/User-notification-campaign3"
import User_notification_campaign4 from "../components/user-notification-campaign/User-notification-campaign4"
import { ScrollView } from "react-native"
import User_notification_campaign5 from "../components/user-notification-campaign/User-notification-campaign5"
import User_notification_campaign6 from "../components/user-notification-campaign/User-notification-campaign6"
import User_notification_campaign7 from "../components/user-notification-campaign/User-notification-campaign7"
import User_notification_campaign8 from "../components/user-notification-campaign/User-notification-campaign8"
import { useState } from "react"





const User_notification_campaign = () => {

    const[show,setShow] = useState(false)

  return (
    <Wrapper color="#F2F3FD">
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <User_notification_campaign1/>
            <User_notification_campaign2/>
            <User_notification_campaign3/>
            <User_notification_campaign4 warn={true} place='Title' title="Campaign Title"/>
            <User_notification_campaign4 warn={true} place='Location' title="Location"/>
            <User_notification_campaign4 warn={false} place='Amount needed' title="Campaign Goal"/>
            <User_notification_campaign5/>
            <User_notification_campaign6/>
            <User_notification_campaign7 setModalVisible={setShow}/>
            <User_notification_campaign8 modalVisible={show} setModalVisible={setShow}/>
        </ScrollView>
    </Wrapper>
  )
}

export default User_notification_campaign
