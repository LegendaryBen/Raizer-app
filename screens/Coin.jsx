import Wrapper from "../components/Wrapper"
import Coin1 from "../components/coin/Coin1"
import Proceed1 from "../components/proceed/Proceed1"
import Proceed2 from "../components/proceed/Proceed2"
import Proceed3 from "../components/proceed/Proceed3"
import Coin2 from "../components/coin/Coin2"
import Coin3 from "../components/coin/Coin3"
import Coin4 from "../components/coin/Coin4"
import Coin5 from "../components/coin/Coin5"
import Coin6 from "../components/coin/Coin6"
import { ScrollView } from "react-native"
import Coin7 from "../components/coin/Coin7"
import Coin8 from "../components/coin/Coin8"
import Coin9 from "../components/coin/Coin9"
import { useState } from "react"
import Coin10 from "../components/coin/Coin10"


const Coin = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
        <Wrapper color='#F2F3FD'>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <Proceed1/>
                <Proceed2 text="Proceed to donate"/>
                <Proceed3/>
                <Coin1 text='Wallet Address'/>
                <Coin2/>
                <Coin3/>
                <Coin1 text='Donation Amount'/>
                <Coin4/>
                <Coin5/>
                <Coin6/>
                <Coin7/>
                <Coin8/>
                <Coin9 val={modalVisible} func={setModalVisible}/>
                <Coin10  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </ScrollView>
        </Wrapper>
  )
}

export default Coin