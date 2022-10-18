import { View, TextInput, SafeAreaView, StyleSheet, Text, Image, Pressable } from "react-native";
import React, {useState} from "react";

export default function Cadastro(){
  return(
    <View style={{backgroundColor: "#E9E9E9"}}>
    <View style={styles.background}>
      
      <Image 
      source={require("../img/logo.png")}
      style={styles.img}
      />
      
      <SafeAreaView style={styles.safeArea}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
      />
    </SafeAreaView>

    <Text style={styles.text}>
    Ao se cadastrar, você concorda com nossos <Text style={{fontWeight: "bold"}}>Termos e Política de Privacidade </Text>.
    </Text>

    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>FINALIZAR CADASTRO</Text>
    </Pressable>
    </View>
    </View>
  )
}

const styles= StyleSheet.create({
  background:{
    marginVertical:35,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:25,
  },
  img:{
    justifyContent:"center",
    width:179,
    height:130,
  },
  input: {
    marginVertical:8,
    height: 39,
    width:327,
    marginHorizontal:5,
    borderWidth: 1,
    padding: 10,
    borderColor:"#363636",
    backgroundColor:"#C0C0C0",
    borderRadius:8
  },
  safeArea:{
    marginTop:40,
  },
  button:{
    marginTop:12,
    width:189,
    height:63,
    backgroundColor:"#04446C",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  buttonText:{
    color:"#FFFFFF"
  },
  text:{
    marginTop:25,
    width:244,
    height:92,
    textAlign:"center"
  }
})