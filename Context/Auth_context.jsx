import { createContext } from 'react'
import { useState } from 'react'



const Auth = createContext()

const Auth_context = ({children}) => {

    const[login,setLogin] = useState({
        loading:true,
        token:"",
        user:{
          email:null,
          password:null
        }
    })


  return (
    <Auth.Provider value={{login,setLogin}}>
        {children}
    </Auth.Provider>
  )
}


export default Auth_context
export {Auth}