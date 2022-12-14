import React, { useState } from "react";
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from "react-native"
import Exames from "../Exames";
import SelectTipe from "../SelectTipe";
import SelectOrder from "../SelectOrder";

export default function PaginaExamesMedico(){
  const [pacientes, setPacientes] = useState([
    {
      id: '1', 
      data: '15/10/2000', 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '2', 
      data: '15/8/2013', 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '3', 
      data: '15/05/2014', 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '4', 
      data: '15/10/2021', 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '5', 
      data: '30/09/2022', 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
  ])
  return(
    <View style={styles.container}>
      <View style={{height:60, backgroundColor:"#E9E9E9", alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:32}}>Exames</Text>
      </View>
 
      <FlatList 
      data={pacientes}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Exames data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  filtro:{
    backgroundColor:"#E9E9E9",
    height:40,
    marginBottom:8,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    padding:13,
  },
  button:{
    marginTop:8,
    height:52,
    backgroundColor: "#04446C",
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center"
  }
})