import { ImageBackground,Image,Text,View,StyleSheet,useWindowDimensions,TouchableOpacity } from "react-native"
import Wrapper from "../Wrapper"
import Welcome2 from "./welcome2";

const Welcome1 = ({obj}) => {

  const {height, width} = useWindowDimensions();

  return (
    <Wrapper>
        <ImageBackground source={require('../../assets/images/back.jpg')}>
            <View style={[{width,height}]}>
                <View style={styles.skip}>
                 {obj.skip &&<TouchableOpacity style={styles.skipbtn}>
                      <Text style={styles.text}>Skip</Text>
                      <Image source={require('../../assets/images/skip.png')}/>
                    </TouchableOpacity>}
                </View>
                <View style={styles.container}>
                    <View style={styles.imgcontainer}>
                      <View style={styles.parent}>
                          <Image source={obj.img} style={styles.img}/>
                          <Text style={styles.title}>{obj.title}</Text>
                          <Text style={styles.hint}>{obj.hint}</Text>
                          <Welcome2 pos={obj.pos}/>
                      </View>
                    </View>
                    <View style={styles.btncontainer}>
                        <TouchableOpacity style={styles.next}>
                            <Text style={styles.nxtbtn}>{obj.btn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </Wrapper>
   
  )
}



const styles = StyleSheet.create({
    skip:{
      justifyContent:"flex-end",
      flexDirection:"row",
      height:80,
      alignItems:"center",
      paddingHorizontal:30
    },
    skipbtn:{
      width:"auto",
      flexDirection:"row",
      alignItems:"center"
    },
    text:{
      fontFamily:"archivo",
      color:"#4F4F4F",
      fontSize:18,
      lineHeight:72,
      fontWeight:"900"
    },
    container:{
      flex:1,
      width:"100%"
    },
    imgcontainer:{
      height:"75%",
      paddingHorizontal:30,
      justifyContent:"center"
    },
    parent:{
      alignItems:"center",
      width:"100%",
      paddingTop:80
    },
    btncontainer:{
      height:"25%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    img:{
      objectFit:"contain",
      marginBottom:10
    },
    title:{
      fontFamily:"archivo",
      textAlign:"center",
      marginBottom:20,
      fontSize:36,
      lineHeight:31,
      fontWeight:"600",
      color:"#181818"
    },
    hint:{
      fontFamily:"archivo",
      textAlign:"center",
      fontSize:14,
      lineHeight:16,
      fontWeight:"600",
      color:"#4F4F4F",
      marginBottom:50
    },
    next:{
      width:"80%",
      height:60,
      backgroundColor:"#1928B3",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:35
    },
    nxtbtn:{
      textAlign:"center",
      color:"#FFFFFF",
      fontFamily:"archivo",
      fontSize:17,
      lineHeight:20,
      fontWeight:"600"
    }
})


export default Welcome1
