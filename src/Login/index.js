import React from "react"
import { View, Image, StyleSheet, Pressable, Text } from "react-native";

export default function Login(){
  return(
    <View style={styles.container}>
      <Image source={require("../img/logo.png")}
      style={styles.logo}/>
      <View style={styles.view}>
        <View>
        <Text style={[styles.text, {fontSize: 27, marginBottom: 40}]}>
          BEM VINDO AO APP!
        </Text>
        <Text style={[styles.text, {fontSize: 16}]}>  
          <Text>  </Text>Para utiliza-lo faça o login com a sua conta gov clicando no botão abaixo.
        </Text>
        </View>


        <View>
        <Pressable style={styles.button}>
        <Text style={{color: "#FFFFFF"}}>ENTRAR COM <B>GOV.BR</B></Text>
        </Pressable>
        </View>
      </View>
    </View>
    )
}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const styles= StyleSheet.create({
  logo:{
    marginTop:85,
    width:179,
    height:130,
    
  },
  container:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#E9E9E9"
  },
  view:{
    alignItems:"center",
    width:344,
    height:388,
    backgroundColor:"#24BCC4",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25
  },
  button:{
    marginTop:135,
    width:189,
    height:63,
    backgroundColor:"#EC6B34",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  text:{
    color:"#FFFFFF"
  }
})