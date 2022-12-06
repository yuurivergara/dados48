import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from "react-native";
import Iconicons from "@expo/vector-icons/Ionicons"
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function PaginaSeusProfissionais(){
    const DATA=[{
      img:"https://sujeitoprogramador.com/instareact/foto1.png",
      nome:"Yuri Vergara"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto2.png",
      nome:"Nelson Andrade"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto3.png",
      nome:"Joao Farias"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto4.png",
      nome:"Roberto Lopes"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto5.png",
      nome:"Vania Lima"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto5.png",
      nome:"Rian Menezes"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto5.png",
      nome:"Valentina Castro"
    },{
      img:"https://sujeitoprogramador.com/instareact/foto5.png",
      nome:"Ricardo Gomes"
    },]

    const [searchText, setSearchText] = useState("")
    const [filtro, setFiltro]= useState(DATA)

    const handleOrderClick = () => {
      let newList = [...DATA]

      newList.sort((a , b) => {
        if(a.nome > b.nome){
          return 1
        }else {
          if(b.nome > a.nome){
            return -1
          }else{
            return 0
          }
        }
      })

      setFiltro(newList)
    }

    useEffect(()=>{
      if(searchText === ""){
        setFiltro(DATA)
      }else{
        setFiltro(
          DATA.filter((item)=>{
            if(item.nome.toLowerCase().indexOf(searchText.toLowerCase())> -1){
              return true;
            }else
            {
              return false;
            }
          })
        )
      }
    },[searchText])
  return(
    
    <View style={{flex:1}}>
      <View style={styles.box1}>
        <Iconicons name={"chevron-up"} size={35} color="black" style={{marginLeft:10}}/>
        <Image 
        source={{uri : "https://sujeitoprogramador.com/instareact/fotoPerfil1.png"}}
        style={styles.img}
        />
        
        <Text style={{marginLeft:24, fontSize:20,marginTop:7}}>Arthur</Text>
        
      </View>
      <View style={styles.box2}>
          <Text style={{marginBottom:10, fontSize:18}}>SEUS PROFISSIONAIS DA SAÚDE</Text>
          <View style={styles.searchArea.container}>
            <View style={styles.searchArea.view1}>
            <Image 
            source={{uri: "https://img.icons8.com/material/512/search.png"}}
            style={{height:15, width:15, marginHorizontal:15}}
            />
            <TextInput 
            placeholder="Pesquisar"
            onChangeText={setSearchText}
            value={filtro}
            />
            </View>
            <TouchableOpacity style={styles.view2} onPress={handleOrderClick}>
            <MaterialCommunityIcons 
            name="order-alphabetical-ascending"
            size={32}
            color="black"
            />
            </TouchableOpacity>
          </View>
            
            <FlatList
            data={filtro}
            renderItem={({item}) => 
              
            <TouchableOpacity style={styles.flatview}>
              <View style={styles.view1}>
              <Image
              source={{uri: item.img}}
              style={styles.foto}
              />
             <Text style={{marginLeft:20}}>{item.nome}</Text> 
             </View>
             <View style={styles.view2}>
             <Image 
             source={{uri:"https://img.icons8.com/material-outlined/512/filled-topic.png"}}
             style={{justifyContent:"flex-end",width:24, height:24}}
             />
             </View>
            </ TouchableOpacity>
            
            
          }
            keyExtractor={item => item.nome}
            showsVerticalScrollIndicator={false}
            />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box1:{
    height:275,
    backgroundColor:"#E9E9E9",
    paddingTop: "5%",
    borderBottomWidth:1,
    borderBottomColor:"#24BCC4",
  },
  img:{
    height: 170
  },
  box2:{
    marginTop:7,
    backgroundColor:"#E9E9E9",
    height: "100%",
    justifyContent:"space-between",
    paddingHorizontal:24,
    borderTopWidth: 1,
    borderColor:"#24BCC4",
    flex:1,
    paddingTop:10
  },
  button:{
    height:72,
    borderRadius:20,
    backgroundColor:"#D9D9D9",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginBottom: 10
  },
  foto:{
    width:50,
    height:50,
    borderRadius:30
  },
  flatview:{
    flexDirection:"row",
    marginTop:25,
    justifyContent:"space-between",
    alignItems:"center",
  },
  view1:{
    flexDirection:"row",
    alignItems:"center"
  },
  searchArea:{
    container:{
      flexDirection:"row",
      alignItems:"center" ,
      justifyContent:"space-between",
    },
    view1:{
      flex:1,
      backgroundColor:"#D9D9D9",
      borderRadius:10,
      padding:5,
      flexDirection:"row",
      alignItems:"center"} 
    },
    view2:{
      marginLeft:10
    }

})