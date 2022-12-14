import React from "react"
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";

export default function PerfilPaciente(){
  return(
  <View style={styles.container}>
    <TouchableOpacity style={styles.container2}>
      <Image 
      source={{uri: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png'}}
      style={styles.imgperfil}
      />
      <Text
      style={styles.text}
      >Arthur</Text>
    </TouchableOpacity>

    <View style={styles.icons}>
      <TouchableOpacity style={styles.box}>
        <Image 
        source={require("../img/icons/exames.png")}
        />
        <Text> MEDICOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image 
        source={require("../img/icons/exames.png")}
        />
        <Text>NOTIFICAÇÕES</Text>
      </TouchableOpacity>
      
    </View>

    <View style={styles.icons}>
      <TouchableOpacity style={styles.box}>
        <Image 
        source={require("../img/icons/exames.png")}
        />
        <Text> EXAMES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image 
        source={require("../img/icons/exames.png")}
        />
        <Text> GRUPOS</Text>
      </TouchableOpacity>
      
    </View>

    <View style={styles.bottom}>
    <Pressable style={styles.logbotao}>
      <Text>Logout</Text>
    </Pressable>
    <Pressable style={styles.logbotao}>
      <Text>Sair</Text>
    </Pressable>
    </View>
  </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E9E9E9",
    padding:24,
  },
  imgperfil:{
    width:75,
    height:75,
    borderRadius:40
  },
  container2:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  text:{
    fontSize: 22,
  },
  box:{
    width:139,
    height:70,
    backgroundColor:"#D9D9D9",
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  icons:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30
  },
  logbotao:{
    backgroundColor:"#D9D9D9",
    height:35,
    borderRadius:15,
    marginVertical:5,
    alignItems:"center",
    justifyContent:"center"
  },
  bottom:{
    marginTop:80
  }
})