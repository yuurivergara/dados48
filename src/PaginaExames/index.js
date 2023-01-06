import React, { useState, useEffect } from "react";
import {View, StyleSheet, FlatList, Text, TouchableOpacity, Modal} from "react-native"
import Exames from "../Exames";
import SelectTipe from "../SelectTipe";
import SelectOrder from "../SelectOrder";
import ModalFiltro from "../ModalFiltro";

export default function PaginaExames(){
  

  const pacientes = ([
    {
      id: '1', 
      data: 1045, 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '2', 
      data: 1256, 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de Urina',  
     },
     {
      id: '3', 
      data: 960, 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
     {
      id: '4', 
      data: 325, 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de Urina',  
     },
     {
      id: '5', 
      data: 2022, 
      obs: 'Mais um dia de muitos bugs :)', 
      url: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      tipo: 'Exame de sangue',  
     },
  ])
    
  const [text,setText]= useState("Descrescente")
  const [press, noPress] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const  [filtro, setFiltro] = useState([])
  
  
  const crescList = pacientes //copia lista
  
  crescList.sort((a,b) => {
    if(a.data > b.data){
      return 1
    }else {
      if(b.data > a.data){
        return -1
      }else{
        return 0
      }
    }
  })
  // crescList == lista pacientes em ordem crescente
  
  useEffect(()=>{
    if(press === false){
      setFiltro(crescList.reverse())
    }else{
      setFiltro(crescList)
    }
  },[press])
  
  
  console.log(press)
  console.log(filtro)
  
  return(
    <View style={styles.container}>
    
      <View style={{height:60,paddingHorizontal:24, backgroundColor:"#E9E9E9", alignItems:"center", justifyContent:"space-evenly", flexDirection:"row"}}>
        <Text style={{fontSize:32}}>Seus exames</Text>
        <TouchableOpacity style={styles.filtro} onPress={()=> setVisibleModal(true)}>
          <Text style={{textAlign:"center",justifyContent:"center", color:"white"}}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:"white"}}>ADICIONAR EXAME</Text>
      </TouchableOpacity>
      <FlatList 
      data={filtro}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Exames data={item}/>}
      />

      <Modal 
      visible={visibleModal}
      transparent={true}
      onRequestClose={()=> setVisibleModal(false)}
      >
        <ModalFiltro 
        handleClose={()=> setVisibleModal(false)}
        press={()=> {if (press === false)
          {
             noPress(true)
             setText("Crescente")
            // chamar a lista decrescente no feed
          }else{
           noPress(false)
           setText("Decrescente")
            //chamar a lista crescente no feed
          }
        }}
      texto={text}
        />
      </Modal>
      
    
                        
    
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
  },
  filtro:{
    width:80,
    height:25,
    backgroundColor:"#04446C",
    borderRadius:50
  }
})