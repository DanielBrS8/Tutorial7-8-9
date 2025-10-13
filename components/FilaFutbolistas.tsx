import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function FilaFutbolistas({ listaDorsales }) {
  return (
    <View style={styles.fila}>
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})
