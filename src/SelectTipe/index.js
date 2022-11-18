import React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet, Text} from "react-native";
import Iconicons from "@expo/vector-icons/Ionicons"

export default function SelectTipe(){
  return(
    <SafeAreaView>
      <TouchableOpacity style={styles.container}>
        <Text>Tipo de exame</Text>
        <Iconicons name={"chevron-down"} size={32} color="black"/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    height:30,
    width:160,
    backgroundColor:"#F8F9FA",
    paddingHorizontal:30,
    borderRadius:8,
    fontSize:18,
    borderWidth:1,
    borderColor:"#CCC",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
})