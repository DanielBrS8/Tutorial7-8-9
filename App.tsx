import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import Futbolista from './components/Futbolista'

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={require("./assets/campeones.png")}
        style={styles.logo}
        contentFit={"fill"}
      />

      <View style={styles.campo}>

        <View style={styles.lista}>
          <Futbolista nombre={"Casillas"} dorsal={1} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={2} puesto={"Portero"}></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={3} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={4} puesto={"Portero"} ></Futbolista>
        </View>
        <View style={styles.lista}>
          <Futbolista nombre={"Casillas"} dorsal={5} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={6} puesto={"Portero"} ></Futbolista>
        </View>
        <View style={styles.lista}>
          <Futbolista nombre={"Casillas"} dorsal={7} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={8} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={9} puesto={"Portero"} ></Futbolista>
          <Futbolista nombre={"Casillas"} dorsal={10} puesto={"Portero"} ></Futbolista>
        </View>
        <View style={styles.lista}>
          <Futbolista nombre={"Casillas"} dorsal={11} puesto={"Portero"} colorFondo={"#a2d6eeff"}></Futbolista>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
  },

  logo: {

    width: "100%",
    height: 250,

  },

  campo: {

    flex: 1,

    backgroundColor: "#468944ff",
    padding: 5,
    paddingTop:20,
    rowGap: 20,
    

  },

  lista: {

    flexDirection: "row",
    justifyContent: "space-around",
   
  },

})