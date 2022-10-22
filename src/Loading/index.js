import React from "react"
import { View, Image, StyleSheet } from "react-native";

export default function Loading(){
  return(
    <View style={styles.container}>
      <Image source={require("../img/logo.png")}
      style={styles.logo}/>
    </View>
    )
}

const styles= StyleSheet.create({
  logo:{
    width:179,
    height:130,
    
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E9E9E9"
  }
})