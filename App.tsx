import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Futbolista from './components/Futbolista'

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Futbolista nombre={"Raidel"} dorsal={9} puesto={"delantero"} style={styles.gigante} ></Futbolista>
      <Futbolista nombre={"Manuel"} dorsal={10} puesto={"suplente"} ></Futbolista>

    </View>
  )
}

const styles = StyleSheet.create({

  contenedor: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  gigante: {

    width: 300,
    height: 300,
    marginTop: 200,
    backgroundColor:"#27F54D", 
    color: "#27F54D"
  }

})