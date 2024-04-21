import { View,StyleSheet,Text,ImageBackground,FlatList,TouchableOpacity } from "react-native"




const User_home6 = (props) => {

    const DATA = [
        {
        id: 1,
        title: 'All',
        img: require("../../assets/images/instagram.jpg"),
        dist:"4.2km"
        },
        {
        id: 2,
        title: 'Medical',
        img: require("../../assets/images/spotify.jpg"),
        dist:"4.2km"
        },
        {
        id: 3,
        title: 'Education',
        img: require("../../assets/images/tiktok.jpg"),
        dist:"4.2km"
        },
        {
        id: 4,
        title: 'Orphanage',
        img:  require("../../assets/images/twitter.jpg"),
        dist:"4.2km"
        },
        {
        id: 5,
        title: 'Disaster',
        img: require("../../assets/images/whatsapp.jpg"),
        dist:"4.2km"
        },
        {
        id: 6,
        title: 'Infrastructure',
        img: require("../../assets/images/youtube.jpg"),
        dist:"4.2km"
        }
        
    ];





    return (
        <View style={styles.conatiner}>
            <FlatList
                data={DATA}
                renderItem={({item}) =>{

                    return(
                        <TouchableOpacity style={styles.box1}>
                            <View style={styles.box}>
                                <ImageBackground source={item.img} style={styles.cover}>
                                    <View style={styles.dist}>
                                        <Text style={styles.dist_txt}>{item.dist}</Text>
                                    </View>
                                    <View style={styles.cat}>
                                        <Text style={styles.dist_txt}>{item.title}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )

                }}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default User_home6


const styles = StyleSheet.create({
    conatiner:{
        marginTop:20,
        paddingHorizontal:20
    },
    cover:{
       width:"100%",
       height:"100%"
     
    },
    box:{
        overflow:"hidden",
        width:"100%",
        height:"100%"
    },
    box1:{
        width:131,
        height:140,
        borderRadius:15,
        overflow:"hidden",
        marginRight:10,
    },
    dist:{
        position:"absolute",
        top:10,
        right:10,
        paddingVertical:3,
        paddingHorizontal:10,
        backgroundColor:"#1928B399",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:10
    },
    dist_txt:{
        color:"white",
        fontFamily:"archivo",
        fontSize:11,
        lineHeight:13,
        fontWeight:"600"
    },
    cat:{
        position:"absolute",
        bottom:10,
        left:10
    }
})