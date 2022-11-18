import React, {useState} from "react";
import {View, StyleSheet, Text, FlatList} from "react-native";
import Iconicons from "@expo/vector-icons/Ionicons"
import ListaGrupos from "../ListaGrupos";

export default function Grupos(){
  const [feed , setFeed] = useState([
    {
      id: '1', 
      nome: 'Diabetes Dr. Lucas', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
     },
    {
      id: '2', 
      nome: 'Alimentação', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
    },
    {
      id: '3', 
      nome: 'Hidratacão', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
    },
    
  ])
  return(
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <Iconicons name={"chevron-up"} size={35} color="black" style={{marginLeft:10}}/>
        <Text style={{textAlign:"center", marginLeft:80, fontSize: 24}}>SEUS GRUPOS</Text>
      </View>
      <FlatList data={feed}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item})=> <ListaGrupos data={item} />} 
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E9E9E9",
    paddingTop:24,
  }
})