import { Modal,StyleSheet,View,TouchableOpacity,TextInput,Text,Image,ScrollView} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const User_notification_campaign8 = ({modalVisible,setModalVisible}) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible)
            }}
        >   
                <View style={styles.mod}>
                    <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent:"center",flex:1}}>
                        <View style={styles.card}>
                            <View style={styles.layer1}>
                                <View/>
                                <Text>Publish Campaign</Text>
                                <TouchableOpacity style={styles.btn_cont} onPress={()=>setModalVisible(!modalVisible)}>
                                    <AntDesign name="close" size={18} color="#4F4F4F" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.layer2}>
                                <Image source={require('../../assets/images/youtube.jpg')} style={styles.img}/>
                                <View style={styles.txt_box}>
                                    <Text numberOfLines={1} style={styles.name}>
                                        Fav Solomon
                                    </Text>
                                    <View style={styles.author_box}>
                                        <Text style={styles.organizer}>
                                            Organizer
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.note_box}>
                                <TextInput multiline style={styles.note} placeholder="Tell us your story ..."/>
                            </View>
                            <View style={styles.upload_box}>
                                <View style={styles.main_cont}>
                                    <TextInput style={styles.main_btn} placeholder="Add to your post"/>
                                </View>
                                <View style={styles.emoji_box}>
                                    <TouchableOpacity style={styles.emoji}>
                                        <Entypo name="emoji-happy" size={18} color="#1928B3" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.emoji}>
                                        <FontAwesome name="photo" size={18} color="#1928B3" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.emoji}>
                                        <FontAwesome5 name="user-tag" size={18} color="#1928B3" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.emoji}>
                                        <Feather name="mic" size={18} color="#1928B3" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.pub_cont}>
                                <View style={styles.pub_btn}>
                                    <Text style={styles.pub_txt}>Publish</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
       </Modal>
    )
}

export default User_notification_campaign8

const styles = StyleSheet.create({
    mod:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
        padding:10
    },
    card:{
        height:371,
        width:"100%",
        backgroundColor:"white",
        borderRadius:20,
        overflow:"hidden"
    },
    layer1:{
        height:"13%",
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:"#8E8E9366",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:8
    },
    btn_cont:{
        padding:2,
        backgroundColor:"#8E8E9366",
        borderRadius:50
    },
    layer1_txt:{
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"600",
        color:"#181818"
    },
    layer2:{
        padding:8,
        flexDirection:"row",
        marginBottom:20
    },
    img:{
        objectFit:"cover",
        width:38,
        height:38,
        borderRadius:50,
        marginRight:10
    },
    txt_box:{
        flex:1,
        paddingRight:3
    },
    name:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#4F4F4F",
        fontFamily:"archivo"
    },
    organizer:{
        color:"#F2994A",
        fontSize:11,
        lineHeight:13,
        fontWeight:"600",
        fontFamily:"archivo"
    },
    author_box:{
        paddingVertical:3,
        paddingHorizontal:10,
        backgroundColor:"#F2994A26",
        width:72,
        marginTop:3,
        borderRadius:10
    },
    note_box:{
        height:"30%"
    },
    note:{
        flex:1,
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        padding:8,
        textAlignVertical:"top",
        fontFamily:"archivo",
        color:"#4F4F4F"
    },
    upload_box:{
        flexDirection:"row",
        alignItems:"center",
        borderColor:"#8E8E9366",
        borderWidth:1,
        marginHorizontal:8,
        height:44,
        borderRadius:30,
        paddingHorizontal:10
    },
    main_cont:{
        flex:1
    },
    main_btn:{
        flex:1,
        fontFamily:"archivo",
        color:"#4F4F4F",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500"

    },
    emoji_box:{
        flexDirection:"row",
        alignItems:"center"
    },
    emoji:{
        marginLeft:10
    },
    pub_cont:{
        width:"100%",
        height:44,
        marginTop:20
    },
    pub_btn:{
        marginHorizontal:8,
        backgroundColor:"#1928B3",
        height:"100%",
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    pub_txt:{
        fontFamily:"archivo",
        fontWeight:"600",
        fontSize:17,
        lineHeight:20,
        color:"#FFFFFF"
    }

});
  