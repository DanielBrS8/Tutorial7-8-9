const EQUIPO = require("../data/jugadores.json")

function getJugador(dorsal) {
  return EQUIPO.find(jugador => jugador.dorsal === dorsal)
}

function mostrarInformacion(dorsal){
  // 1ª parte: obtenemos el jugador de la lista de jugadores
  const jugador = getJugador(dorsal)
  // 2ª parte: construimos el string a mostrar en la ventana emergente
  const mensaje = getInformacion(jugador)
  // 3ª parte: abrimos la ventana emergente con dicho string
  abrirVentanaEmergente(`Información de ${jugador.nombre}`, mensaje)

}

function getInformacion(jugador){
  return `Nombre: ${jugador.nombreCompleto}\nClub: ${jugador.equipo}\nEdad: ${jugador.edad}`
}



export { EQUIPO, getJugador }
