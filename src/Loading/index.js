import React from "react"
import { View, Image, StyleSheet } from "react-native";

export default function Loading(){
  return(
    <View style={styles.container}>
      <Image source={require("../img/logo.png")}
      style={styles.logo}/>
      <Image source={require("../img/LogoC3BrancoP.png")}
      style={styles.logo1}/>
    </View>
    )
}

const styles= StyleSheet.create({
  logo:{
    marginTop:150,
    width:179,
    height:130,
    
  },
  container:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#E9E9E9"
  },
  logo1:{
    height:100,
    width:190,
    marginBottom:30,
  }
})