import Wrapper from "../components/Wrapper"
import User_wallet_details1 from "../components/user-wallet-details/User-wallet-details1"
import User_wallet_details2 from "../components/user-wallet-details/User-wallet-details2"
import User_wallet_details3 from "../components/user-wallet-details/User-wallet-details3"
import { useState } from "react"

const User_wallet_details = () => {

  const[show,setShow] = useState(false)

  return (
    <Wrapper color="#F2F3FD">
        <User_wallet_details1/>
        <User_wallet_details2 setShow={setShow}/>
        <User_wallet_details3 setShow={setShow} show={show}/>
    </Wrapper>
  )
}

export default User_wallet_details
