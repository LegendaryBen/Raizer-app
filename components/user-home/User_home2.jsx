import { View,StyleSheet,Text,useWindowDimensions,ImageBackground} from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import { useState } from "react";



const img = [
    require("../../assets/images/instagram.jpg"),
    require("../../assets/images/spotify.jpg"),
    require("../../assets/images/tiktok.jpg"),
    require("../../assets/images/twitter.jpg"),
    require("../../assets/images/whatsapp.jpg"),
    require("../../assets/images/youtube.jpg"),
]


const User_home2 = () => {

    const {width} = useWindowDimensions();

    const [track,setTrack] = useState(0);

    

    return (
        <View style={styles.container}>
            <Carousel
                    loop
                    width={width - 40}
                    height={150}
                    autoPlay={true}
                    // mode="parallax"
                    data={[...new Array(img.length).keys()]}
                    scrollAnimationDuration={3000}
                    onSnapToItem={(index) => {setTrack(index)}}
                    renderItem={({ index}) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                borderRadius:16,
                                overflow:"hidden"
                            }}
                        >
                            <ImageBackground style={styles.backimg} source={img[index]}></ImageBackground>
                        </View>
                    )}
                />
            <View style={[styles.dot_box,{width:width-40}]}>
                    {
                        img.map((item,id)=> <View style={[styles.dot,track == id && {backgroundColor:"white"}]} key={id}></View>)
                    }
            </View>
        </View>
    )
}

export default User_home2


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:150,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
    },
    dot_box:{
        position:"absolute",
        height:35,
        backgroundColor:"transparent",
        bottom:0,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    dot:{
        height:7,
        width:7,
        marginLeft:3,
        borderRadius:50,
        borderWidth:2,
        borderColor:"white"
    },
    backimg:{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    }
})