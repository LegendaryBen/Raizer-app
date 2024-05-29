import { StyleSheet, Text, View,Modal,TouchableWithoutFeedback,TextInput,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Coin10 = ({modalVisible,setModalVisible}) => {

    const[hide,setHide] = useState(false)

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
            <TouchableWithoutFeedback style={{flex:1}} onPress={()=>setModalVisible(!modalVisible)}>
                <View style ={{flex:1,backgroundColor:"rgba(0,0,0,0.5)"}}>

                </View>
            </TouchableWithoutFeedback>
            <View style={styles.box}>
                <View style={styles.details}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Input Password</Text>
                    </View>
                    <View style={styles.input_cont}>
                        <View style={styles.input_box}>
                            <TextInput style={styles.input} secureTextEntry={hide}/>
                            <TouchableOpacity onPress={()=>setHide(!hide)}>
                                <Ionicons name={hide == true ? 'eye' : 'eye-off'} size={24} color="#3C3C4399" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.donate_box} onPress={()=>setModalVisible(false)}>
                        <View style={styles.donate_btn}>
                            <Text style={styles.donate_txt}>Donate</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Coin10

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        height:292,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    details:{
        backgroundColor:"#F2F3FD",
        height:"100%",
        borderTopLeftRadius:32,
        borderTopRightRadius:32
    },
    header:{
        marginTop:20,
        paddingHorizontal:20
    },
    title:{
        textAlign:"center",
        fontFamily:"archivo",
        fontSize:24,
        lineHeight:28,
        fontWeight:"600",
        color:"#181818"
    },
    input_cont:{
        paddingHorizontal:20,
        marginTop:50
    },
    input_box:{
        height:44,
        borderWidth:1,
        borderColor:"#8E8E9366",
        width:"100%",
        backgroundColor:"#F2F2F380",
        borderRadius:4,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10
    },
    input:{
        flex:1,
        height:"100%",
        paddingRight:10,
        fontFamily:"archivo",
        fontSize:14,
        lineHeight:16,
        fontWeight:"500",
        color:"#3C3C4399"
    },
    donate_box:{
        paddingHorizontal:20,
        marginTop:50
    },
    donate_btn:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:54,
        borderRadius:30,
        backgroundColor:"#1928B3"
    },
    donate_txt:{
        fontFamily:"archivo",
        fontSize:17,
        lineHeight:20,
        fontWeight:"600",
        color:"#FFFFFF"
    }
})

