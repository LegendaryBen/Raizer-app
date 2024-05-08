import Wrapper from "../components/Wrapper"
import User_home_search1 from "../components/user-home-search/User-home-search1"
import User_home_bookmark1 from "../components/user-home-bookmark/User-home-bookmark1"
import User_home_bookmark2 from "../components/user-home-bookmark/User-home-bookmark2"
import User_home_bookmark3 from "../components/user-home-bookmark/User-home-bookmark3"
import User_hom_search2 from "../components/user-home-search/User-home-search2"
import User_hom_search3 from "../components/user-home-search/User-home-search3"



const User_home_search = () => {
    return (
        <Wrapper color="#F2F3FD">
            <User_home_bookmark1/>
            <User_home_bookmark2 name="Search"/>
            <User_home_search1/>
            <User_home_bookmark3/>
            <User_hom_search2/>
            <User_hom_search3/>
        </Wrapper>
    )
}

export default User_home_search
