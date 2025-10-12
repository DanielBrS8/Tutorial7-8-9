import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

type FutbolistaStyle = ViewStyle & {
  color?: string
}

type FutbolistaProps = {
  nombre: string
  dorsal: number
  puesto: string
  style?: StyleProp<FutbolistaStyle>
}

export default function Futbolista({ nombre, dorsal, puesto, style = {} }: FutbolistaProps) {
  const plano = StyleSheet.flatten(style)

  const estiloContenedorAmpliado = {
    width: plano.width ?? styles.contenedor.width,
    height: plano.height ?? styles.contenedor.height,
    backgroundColor: plano.backgroundColor ?? styles.contenedor.backgroundColor,
  }

  const estiloDorsalAmpliado = {
    color: plano.color ?? styles.dorsal.color,
  }

  return (
    <View style={[styles.contenedor, estiloContenedorAmpliado]}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={[styles.dorsal, estiloDorsalAmpliado]}>{dorsal}</Text>
      <Text style={styles.puesto}>{puesto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    borderRadius: 5,
    width: 100,
    height: 100,
    backgroundColor: "#d63636ff",
    borderWidth: 2,
    borderColor: "#b42c2cff",
  },
  nombre: {
    fontSize: 18,
    color: "black",
  },
  dorsal: {
    fontSize: 40,
    color: "black",
  },
  puesto: {
    fontSize: 12,
    color: "black",
  },
})
