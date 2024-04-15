import {FlatList,View,Alert} from "react-native"
import Welcome1 from "../components/welcome/welcome1"
import { useRef } from "react"



const Welcome = ({navigation}) => {
  
  const flatListRef = useRef(null)

  const scrollToNextItem1 = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: 1,
        animated: true,
      });
    }
  };

  
  const scrollToNextItem2 = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: 2,
        animated: true,
      });
    }
  };

  const login = ()=>{
      navigation.navigate("Login")
  }


    const DATA = [
        {
          id: 1,
          title: 'Donation',
          hint:'Make your donations transparent & anonymous by paying with crypto',
          img:require('../assets/images/donation.png'),
          btn:'Next',
          skip:true,
          pos:"F",
          func:scrollToNextItem1,
          login
        },
        {
          id: 2,
          title: 'Fundraising',
          hint:'Fundraise with transparency, publish & get people support your campaign',
          img:require('../assets/images/fundraising.png'),
          btn:'Next',
          skip:true,
          pos:"S",
          func:scrollToNextItem2,
          login
        },
        {
          id: 3,
          title: 'Wallet',
          hint:'Send & receive donations directly into your crypto wallet',
          img:require('../assets/images/wallet.png'),
          btn:'Get Started',
          skip:false,
          pos:"T",
          func:login,
          login
        },
      ]
    

  return (
        <FlatList
            data={DATA}
            renderItem={({item}) => <Welcome1 obj={item}/>}
            keyExtractor={item => String(item.id)}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
        />
  )
}



export default Welcome
