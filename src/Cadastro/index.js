import { View, ScrollView, TextInput, StyleSheet, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, {useEffect, useState} from "react";

import api from "../Services/Api"

export default function Cadastro(){
const [nome, setNome] = useState("")
const [sobrenome, setSobrenome] = useState("")
const [nascimento, setNascimento] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
  

const handlePost = () => {
  api.post("/APP1/controller/usuario.php?criarusuario",{
      "nome": nome,
      "sobrenome": sobrenome,
       "data_de_nascimento": nascimento,
       "email": email,
       "senha": senha
      }).then(({data}) => Alert.alert("Sucesso",data.mensagens.toString())).catch(function(error) {
        Alert.alert("Erro",error.response.data.mensagens.toString())
       });
    }
    const [error, setError] = useState("")
 

  return(
    <View style={{flex:1, backgroundColor:"#FFFFFF", alignItems:"center", paddingHorizontal:"5%",paddingVertical:"15%", flexDirection:"column", justifyContent: "space-between"}}>
      
      <Image 
      source={require("../img/logo.png")}
      style={styles.img}
      
      />
      <Text style={{color: "red"}}></Text>
      <ScrollView style={{marginTop:"15%"}}>
        <TextInput 
        style={styles.input}
        placeholder="Nome..."
        onChangeText={value => setNome(value)}
        >

        </TextInput >
      
        <TextInput 
        style={styles.input}
        placeholder="Sobrenome..."
        onChangeText={value => setSobrenome(value)}
        >

        </TextInput>
      
        <TextInput 
        style={styles.input}
        placeholder="Nascimento (DD/MM/AAAA)..."
        onChangeText={value => setNascimento(value)}
        >

        </TextInput>
      
        <TextInput 
        style={styles.input}
        placeholder="Email..."
        onChangeText={value => setEmail(value)}
        >

        </TextInput>
      
        <TextInput 
        style={styles.input}
        placeholder="Senha..."
        secureTextEntry={true}
        onChangeText={value => setSenha(value)}
        >

        </TextInput>
      </ScrollView>
      
      <Text style={styles.text}>
        Ao clicar em se cadastrar voce concorda com os nossos Termos e Política de Privacidade
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>FINALIZAR CADASTRO</Text>
      </TouchableOpacity>
      
    </View>
  )}

const styles= StyleSheet.create({
  img:{
    width:179,
    height:130,
  },
  input: {
    marginVertical:10,
    height: 39,
    width:280,
    borderWidth: 1,
    padding: 10,
    borderColor:"#363636",
    backgroundColor:"#C0C0C0",
    borderRadius:8
  },
  button:{
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
    width:244,
    height:92,
    textAlign:"center"
  }
})