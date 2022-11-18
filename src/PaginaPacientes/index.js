import React, { useState } from "react";
import {View, StyleSheet, FlatList, Text} from "react-native"
import Exames from "../Exames";
import ListaPacientes from "../ListaPacientes";

export default function PaginaPacientes(){
  const [pacientes, setPacientes] = useState([
    {
      id: '1', 
      nome: "Murilo Menezes",
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
     },
     {
      id: '2', 
      nome: 'Rafael Menezes', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
     },
     {
      id: '3', 
      nome: 'Felipe Menezes', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
     },
     {
      id: '4', 
      nome: 'Carlos Menezes', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
     },
     {
      id: '5', 
      nome: 'Marcio Menezes', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
     },
  ])
  return(
    <View style={styles.container}>
      <View style={{height:60, backgroundColor:"#E9E9E9", marginTop:8, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:32}}>Seus pacientes</Text>
      </View>
      <FlatList 
      data={pacientes}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <ListaPacientes data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
})