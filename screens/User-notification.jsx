import Wrapper from "../components/Wrapper"
import User_notification1 from "../components/user-notification/User-notification1"
import User_notification2 from "../components/user-notification/User-notification2"


const User_notification = () => {
  return (
    <Wrapper color="#F2F3FD">
        <User_notification1/>
        <User_notification2 logo='edit' text='Start a campaign'/>
        <User_notification2 logo='minussquareo' text='View On-going campaigns'/>
        <User_notification2 logo='calendar' text='Schedule a campaign'/>
        <User_notification2 logo='addusergroup' text='Collaborate'/>
        <User_notification2 logo='addusergroup' text='Drafts'/>
    </Wrapper>
  )
}

export default User_notification
