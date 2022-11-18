import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Iconicons from "@expo/vector-icons/Ionicons"


export default function PaginaGrupo(){
  return(
      <View style={styles.header}>
        <Iconicons name={"chevron-up"} size={35} color="black" style={{marginLeft:10}}/>
        <Image 
        source={{uri: "https://img.freepik.com/premium-photo/group-diverse-people-studio_53876-9287.jpg?w=2000"}}
        style={{height:180}}
        />
        <Text style={{marginLeft:24, marginTop:20, fontSize: 22}}>Diabetes</Text>
        <View style={{flexDirection:"row", alignItems:"center",justifyContent: "space-between", padding: 24}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color:"#FFFFFF"}}>Convidar Pessoas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{color:"#FFFFFF"}}>Fazer post</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height:365,
    backgroundColor:"#E9E9E9",
    paddingTop:24,
  },
  button:{
    backgroundColor:"#04446C",
    height:30,
    width:150,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  }
})