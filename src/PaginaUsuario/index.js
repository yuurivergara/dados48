import React from "react"
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity } from "react-native"
import Iconicons from "@expo/vector-icons/Ionicons"


export default function PaginaUsuario(){
  return(
    <View>
      <View style={styles.box1}>
        <Iconicons name={"chevron-up"} size={35} color="black" style={{marginLeft:10}}/>
        <Image 
        source={{uri : "https://sujeitoprogramador.com/instareact/fotoPerfil1.png"}}
        style={styles.img}
        />
        
        <Text style={{marginLeft:24, fontSize:20,marginTop:7}}>Dr Arthur</Text>
        
      </View>
      <View style={styles.box2}>
          <Text style={{marginTop :10, fontSize:18}}>CONTATO</Text>
        <View >
          <Text style={{marginVertical:10}}>Telefone:</Text>
          <Text style={{marginVertical:10}}>Email:</Text>
          <Text style={{marginVertical:10}}>Endereço profissional: </Text>
          <TouchableOpacity style={styles.button}>
            <Image 
            source={{uri: "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"}}
            style={{width:45, height:45}}
            />
            <Text>WHATSAPP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image 
            source={{uri: "https://policlinicaitaipava.com.br/wp-content/uploads/2020/08/lab_icon_white.png"}}
            style={{width:45, height:45}}
            />
            <Text>EXAMES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  box1:{
    height:275,
    backgroundColor:"#E9E9E9",
    paddingTop: "5%"
  },
  img:{
    height: 170
  },
  box2:{
    marginTop:15,
    backgroundColor:"#E9E9E9",
    height: "100%",
    paddingHorizontal:24
  },
  button:{
    height:72,
    borderRadius:20,
    backgroundColor:"#D9D9D9",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginBottom: 10
  }
})