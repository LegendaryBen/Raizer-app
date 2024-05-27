import Wrapper from '../components/Wrapper'
import Proceed1 from '../components/proceed/Proceed1'
import Proceed2 from '../components/proceed/Proceed2'
import Proceed3 from '../components/proceed/Proceed3'
import Proceed4 from '../components/proceed/Proceed4'
import Proceed5 from '../components/proceed/Proceed5'


const Proceed = () => {
  return (
    <Wrapper color="#F2F3FD">
      <Proceed1/>
      <Proceed2 text='Choose a coin'/>
      <Proceed3/>
      <Proceed4/>
      <Proceed5/>
    </Wrapper>
  )
}

export default Proceed