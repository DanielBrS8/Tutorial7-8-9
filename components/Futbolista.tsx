import { StyleSheet, Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

type FutbolistaStyle = ViewStyle & {
  color?: string
}

type FutbolistaProps = {
  nombre: string
  dorsal: number
  puesto: string
  style?: StyleProp<FutbolistaStyle>
  onPress?: () => void 
}

export default function Futbolista({ nombre, dorsal, puesto, style = {}, onPress}: FutbolistaProps) {

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
    <Pressable
      style={[styles.contenedor, estiloContenedorAmpliado]}
      onPress={onPress}
    >
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={[styles.dorsal, estiloDorsalAmpliado]}>{dorsal}</Text>
      <Text style={styles.puesto}>{puesto}</Text>
    </Pressable>
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
