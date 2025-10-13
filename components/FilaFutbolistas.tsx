import { StyleSheet, View } from 'react-native'
import React from 'react'
import Futbolista from './Futbolista'
import { getJugador, mostrarInformacion } from '../model/Equipo'
type FilaFutbolistasProps = {
  listaDorsales: Array<number>
}

export default function FilaFutbolistas({ listaDorsales }: FilaFutbolistasProps) {
  return (
    <View style={styles.fila}>
      {listaDorsales
        .map(getJugador) // transforma [1,5,8] → [objJugador1, objJugador5, objJugador8]
        .map(futbolista => (
          <Futbolista
            key={futbolista.dorsal}
            nombre={futbolista.nombre}
            dorsal={futbolista.dorsal}
            puesto={futbolista.puesto}
            onPress={() => mostrarInformacion(futbolista.dorsal)}
          />
        ))}
    </View>
  )
}


const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

