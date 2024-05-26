import { ScrollView } from "react-native"
import Wrapper from "../components/Wrapper"
import Donate1 from "../components/donate/Donate1"
import Donate2 from "../components/donate/Donate2"
import Donate3 from "../components/donate/Donate3"
import Donate4 from "../components/donate/Donate4"
import Donate5 from "../components/donate/Donate5"
import Donate6 from "../components/donate/Donate6"
import Donate7 from "../components/donate/Donate7"
import Donate8 from "../components/donate/Donate8"
import Donate9 from "../components/donate/Donate9"
import Donate10 from "../components/donate/Donate10"


const Donate = () => {
    return (
        <Wrapper color="#F2F3FD">
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <Donate1/>
                <Donate2/>
                <Donate3/>
                <Donate4/>
                <Donate5/>
                <Donate6/>
                <Donate7/>
                <Donate8/>
                <Donate9/>
                <Donate10/>
            </ScrollView>
        </Wrapper>
    )
}

export default Donate
