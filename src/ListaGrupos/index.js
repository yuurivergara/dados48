import React from "react";
import {StyleSheet, Text, Image, TouchableOpacity, ScrollView} from "react-native";

export default function ListaGrupos(props){
  return(
    <ScrollView style={styles.container}>
        <TouchableOpacity style={{flexDirection:"row", marginLeft:24, marginTop:10, alignItems:"center"}}>
          <Image 
          source={{uri: props.data.imgPublicacao}}
          style={styles.groupicon}
          />
          <Text style={{marginLeft: 40, fontSize:24}}>{props.data.nome}</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  groupicon:{
    height:70,
    width:70,
    marginVertical:10,
    borderRadius:15
  }
})