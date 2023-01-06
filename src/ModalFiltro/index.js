import React, {useState} from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ModalFiltro({handleClose,press,texto}){
  
  
  
  return(
    
    
    <View style={styles.container}>
      
      
      <TouchableOpacity style={{flex:1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
        <Text style={{textAlign:"center", fontSize:18}}>Ordenar por:</Text>
        <Text>Data:</Text>
        <TouchableOpacity style={styles.button} 
        onPressIn={press}
                      >
          
          
          
          
          <Text style={{color:"white"}}>{texto}</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  button:{
    height:40,
    backgroundColor:"#04446C",
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:5
  },
  content:{
    backgroundColor:"#C7C7C7",
    paddingVertical:20,
    paddingHorizontal:10,
    zIndex:99,
    borderTopStartRadius:30,
    borderTopEndRadius:30
  }
})