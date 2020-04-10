import { createStore } from "redux"

const initialState ={
    jugadores: [{
        id: 1,
        nombre: "Isaac García",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 2,
        nombre: "Gabo Serrano",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 3,
        nombre: "Gordis Ángeles",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 4,
        nombre: "Marco Satvrn",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 5,
        nombre: "Rulo García",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 6,
        nombre: "Yayo Gómez",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 7,
        nombre: "Gonzo Ramírez",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 8,
        nombre: "Dorilocos Rebolledo",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 9,
        nombre: "Angelito Martínez",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 10,
        nombre: "Dani Armas",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 11,
        nombre: "Paul Hidalgo",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 12,
        nombre: "Barry Nava",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 13,
        nombre: "Pancho Pérez",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action)  => {
    if (action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)