import { abrirVentanaEmergente } from "../Utils/Utils"
import { Jugador } from "./Jugador";

const EQUIPO: Array<Jugador> = require("../data/jugadores.json");

function getJugador(dorsal: number): Jugador {
  const jugadorNoEncontrado = {
    nombre: "",
    nombreCompleto: "",
    dorsal: 0,
    puesto: "",
    equipo: "",
    edad: 0,
  };
  return (
    EQUIPO.find((jugador) => jugador.dorsal === dorsal) ?? jugadorNoEncontrado
  );
}

function mostrarInformacion(dorsal: number): void {
  // 1ª parte: obtenemos el jugador de la lista de jugadores
  const jugador = getJugador(dorsal);
  // 2ª parte: construimos el string a mostrar en la ventana emergente
  const mensaje = getInformacion(jugador);
  // 3ª parte: abrimos la ventana emergente con dicho string
  abrirVentanaEmergente(`Información de ${jugador.nombre}`, mensaje);
}

function getInformacion(jugador: Jugador): string {
  return `Nombre: ${jugador.nombreCompleto}\nClub: ${jugador.equipo}\nEdad: ${jugador.edad}`;
}

export { EQUIPO, getJugador, mostrarInformacion, getInformacion };
