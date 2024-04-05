import {FlatList,View} from "react-native"
import Welcome1 from "../components/welcome/welcome1"



const Welcome = () => {


    const DATA = [
        {
          id: 1,
          title: 'Donation',
          hint:'Make your donations transparent & anonymous by paying with crypto',
          img:require('../assets/images/donation.png'),
          btn:'Next',
          skip:true,
          pos:"F"
        },
        {
          id: 2,
          title: 'Fundraising',
          hint:'Fundraise with transparency, publish & get people support your campaign',
          img:require('../assets/images/fundraising.png'),
          btn:'Next',
          skip:true,
          pos:"S"
        },
        {
          id: 3,
          title: 'Wallet',
          hint:'Send & receive donations directly into your crypto wallet',
          img:require('../assets/images/wallet.png'),
          btn:'Get Started',
          skip:false,
          pos:"T"
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

        />
  )
}



export default Welcome
